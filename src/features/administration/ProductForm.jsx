import styled from "styled-components"
import Modal from "../../ui/Modal"
import FormRowItem from "../../ui/FormRowItem"
import { useRef, useState } from "react"
import { HiCamera, HiOutlineRefresh, HiTrash } from "react-icons/hi"
import useCategory from "../category/useCategory";
import { IMGBB_API_KEY } from "../../utilities/constants"
import axios  from "axios"
import useModalEffects from "../../hooks/useModalEffects";
import useAddProduct from "./useAddProduct";
import useUpdateProduct from "./useUpdateProduct";

const StyledProductFormContainer = styled.div`
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`

const StyledHeading = styled.h2`
  margin-top: 25rem;
  color: #efefef;
  filter: drop-shadow(0 0 1px #333);
  
  @media screen and (max-width: 767px) {
    margin-top: 35rem;
  }
`

const StyledProductForm = styled.form`
  width: 50%;
  padding: 40px 20px;
  background-color: var(--color-grey-300);
  box-shadow: 0 0 8px 2px var(--color-grey-500);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: var(--main-transition);
  position: relative;

  
  @media screen and (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 70%;
  }
`

const StyledImagesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
  margin-bottom: 2rem;
`

const StyledImageBox = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &:hover {
    >div {
      bottom: 0;
    }
  }
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`

const StyledImageDeleteBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -100%;
  left: 0;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  z-index: 99;

  >svg {
    font-size: 2.4rem;
  }
`

const StyledImageInput = styled.input`
  display: none;
`

const StyledAddImageButton = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  >svg {
    font-size: 2.4rem;
  }
`

const StyledInput = styled.input`
  flex-basis: 80%;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  font-weight: bold;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`

const StyledTextarea = styled.textarea`
  flex-basis: 80%;
  min-height: 10rem;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  font-weight: bold;
  transition: var(--main-transition);
  resize: none;

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`

const StyledSelectCategory = styled.select`
  flex-basis: 80%;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  font-weight: bold;
  transition: var(--main-transition);
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`

const StyledSelectCategoryOption = styled.option`
  
`

const StyledButton = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  &.close {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
    color: #efefef;
  }

  &.submit {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
    color: #efefef;
  }
`

const StyledResetButton = styled.span`
  width: 100%;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  background-color: var(--color-grey-700);
  color: var(--color-grey-200);
  box-shadow: 0 0 2px 1px var(--color-grey-500) inset;
`

function ProductForm({ product, isOpen, close }) {
  const [title, setTitle] = useState(product?.title || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "");
  const [categoryId, setCategoryId] = useState(product?.category.id || "");
  const [images, setImages] = useState(product?.images || []);
  const {categories} = useCategory();
  const imageInputRef = useRef();
  const formRef = useRef();
  const {addProduct} = useAddProduct();
  const {updateProduct} = useUpdateProduct();

  useModalEffects(formRef, isOpen, close);

  function handleClickAddImage() {
    if (imageInputRef && imageInputRef.current) imageInputRef.current.click();
  }

  async function handleAddImage(e) {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const formData= new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          formData
        );

        const imageUrl = response.data.data.url;
        let newImages = [...images];
        if (newImages.find(img => img === imageUrl) === undefined) {
          newImages.push(imageUrl);
          setImages(newImages);
        }
      } catch (err) {
        console.error(`Error uploading image: ${err.message}`);
      }
    }
  }

  function handleDeleteImage(image) {
    const newImages = images.filter(img => img !== image);

    setImages(newImages);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategoryId(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleReset() {
    setImages(product.images);
    setTitle(product.title);
    setDescription(product.description);
    setCategoryId(product.categpry.id);
    setPrice(product.price);
  }

  function handleAddProduct() {
    if (!images || !title || !description || !categoryId || !price) return;

    addProduct(
      {title, description, images, price, categoryId},
      {onSuccess: () => {
        close();
      }}
    )
  }

  function handleUpdateProduct() {
    if (!images || !title || !description || !categoryId || !price) return;

    updateProduct(
      {id: product.id, title, description, images, price, categoryId},
      {onSuccess: () => {
        close();
      }}
    )
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (product) {
      handleUpdateProduct();
    } else {
      handleAddProduct();
    }
  }

  return (
    <Modal>
      <StyledProductFormContainer>
        <StyledHeading>
          {`${product ? "Edit" : "Add New"} Product`}
        </StyledHeading>
        <StyledProductForm
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
        >
          <StyledImagesContainer>
            {images.length > 0 &&
              images.map(image => (
                <StyledImageBox key={image}>
                  <StyledImage
                    src={image}
                    alt="Product image"
                  />
                  <StyledImageDeleteBox
                    onClick={() => handleDeleteImage(image)}
                  >
                    <HiTrash />
                  </StyledImageDeleteBox>
                </StyledImageBox>
              ))
            }
            <StyledImageInput 
              type="file"
              name="image"
              accept="image/*"
              onChange={handleAddImage}
              ref={imageInputRef}
            />

            <StyledAddImageButton
              onClick={handleClickAddImage}
            >
              <HiCamera />
            </StyledAddImageButton>
          </StyledImagesContainer>

          <FormRowItem
            key="title input"
            label="Title"
            error={!title ? "This field is required" : ""}
          >
            <StyledInput
              id="titleInput"
              type="text"
              placeholder="Enter product title"
              name="title"
              value={title}
              // disabled={isFormLoading}
              onChange={handleTitleChange}
            />
          </FormRowItem>

          <FormRowItem
            key="description input"
            label="Description"
            error={!description ? "This field is required" : ""}
          >
            <StyledTextarea
              id="descriptionInput"
              placeholder="Enter product description"
              name="description"
              value={description}
              // disabled={isFormLoading}
              onChange={handleDescriptionChange}
            />
          </FormRowItem>

          {categories?.length > 0 &&
            <FormRowItem
              key="category input"
              label="Category"
              error={!categoryId ? "This field is required" : ""}
            >
              <StyledSelectCategory
                id="categoryInput"
                placeholder="Enter product category"
                name="category"
                value={categoryId}
                // disabled={isFormLoading}
                onChange={handleCategoryChange}
              >
                {categories.map(category => (
                  <StyledSelectCategoryOption
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </StyledSelectCategoryOption>
                ))}
              </StyledSelectCategory>
            </FormRowItem>
          }

          <FormRowItem
            key="price input"
            label="Price"
            error={!price ? "This field is required" : ""}
          >
            <StyledInput
              id="priceInput"
              type="number"
              placeholder="Enter product price"
              name="price"
              value={price}
              // disabled={isFormLoading}
              onChange={handlePriceChange}
            />
          </FormRowItem>

          {product &&
            <StyledResetButton
              className="reset"
              onClick={handleReset}
            >
              <HiOutlineRefresh />
              Reset
            </StyledResetButton>
          }

          <StyledButton
            className="close"
          >
            Cancel
          </StyledButton>

          <StyledButton
              className="submit"
              type="submit"
            >
              {product ? "Save" : "Add"}
          </StyledButton>
        </StyledProductForm>
      </StyledProductFormContainer>
    </Modal>
  )
}

export default ProductForm