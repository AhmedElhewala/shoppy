import styled from "styled-components"
import Modal from "../../ui/Modal"
import { useRef, useState } from "react"
import FormRowItem from "../../ui/FormRowItem"
import { HiCamera, HiOutlineRefresh, HiTrash, HiViewGrid } from "react-icons/hi"
import  axios  from "axios"
import { IMGBB_API_KEY } from "../../utilities/constants";
import useModalEffects from "../../hooks/useModalEffects";
import useAddCategory from "./useAddCategory";
import useUpdateCategory from "./useUpdateCategory"

const StyledCategoryFormContainer = styled.div`
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  overflow-y: auto;
`

const StyledHeading = styled.h2`
  @media screen and (max-width: 767px) {
    margin-top: 2rem;
  }
`

const StyledCategoryForm = styled.form`
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

const StyledCategoryImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
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

const StyledImageIconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);

  >svg {
    font-size: 8rem;
  }
`

const StyledImageButton = styled.div`
  width: 100%;
  height: 50%;
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
    font-size: 2rem;
  }
`

const StyledImageInput = styled.input`
  display: none;
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

function CategoryForm({ category, close, isOpen }) {
  const formRef = useRef()
  const [image, setImage] = useState(category?.image || "");
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef();
  const [name, setName] = useState(category?.name || "");
  const {addCategory} = useAddCategory();
  const {updateCategory} = useUpdateCategory();

  useModalEffects(formRef, isOpen, close);

  function handleClickImage() {
    if (imageRef && imageRef.current) imageRef.current.click();
  }

  async function handleImageChange (e) {
    const selectedImage = e.target.files[0];
    
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          formData
        );

        const imageUrl = response.data.data.url;
        setImage(imageUrl);
      } catch (err) {
        console.error(`Error uploading image: ${err.message}`);
      }
    }
  }

  function handleClearImage() {
    setImage("");
  }

  function handleImageError() {
    setImageError(true);
  }
  
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleReset() {
    setImage(category.image);
    setName(category.name)
  }

  function handleAddCategory() {
    if (!image || !name) return;

    addCategory(
      {name, image},
      {onSuccess: () => {
        close();
      }}
    )
  }

  function handleUpdateCategory() {
    if (!image || !name) return;

    updateCategory(
      {id :category?.id, name, image},
      {onSuccess: () => {
        close();
      }}
    )
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (category) {
      handleUpdateCategory();
    } else {
      handleAddCategory();
    }
  }

  return (
    <Modal>
      <StyledCategoryFormContainer>
        <StyledHeading>
          {`${category ? "Edit" : "Add New"} Category`}
        </StyledHeading>
        <StyledCategoryForm
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
        >
          <StyledCategoryImageContainer>
            <StyledImageInput 
              type="file"
              name="name"
              accept="image/*"
              onChange={handleImageChange}
              ref={imageRef}
            />

            <StyledImageButton
              onClick={() => {
                if(image) {
                  handleClearImage();
                } else {
                  handleClickImage();
                }
              }}
            >
              {image ? <HiTrash /> : <HiCamera />}
            </StyledImageButton>

            {!image || imageError ?
              <StyledImageIconContainer>
                <HiViewGrid />
              </StyledImageIconContainer> : 
              <StyledImage src={image} alt="Image" onError={handleImageError}/>
            }
          </StyledCategoryImageContainer>

          <FormRowItem
            key="name input"
            label="Category Name"
            error={!name ? "This field is required" : ""}
          >
            <StyledInput
              id="nameInput"
              type="text"
              placeholder="Enter category name"
              name="name"
              value={name}
              // disabled={isFormLoading}
              onChange={handleNameChange}
            />
          </FormRowItem>

          {category &&
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
            onClick={close}
          >
            Cancel
          </StyledButton>

          <StyledButton
              className="submit"
              type="submit"
            >
              {category ? "Save" : "Add"}
          </StyledButton>
        </StyledCategoryForm>
      </StyledCategoryFormContainer>
    </Modal>
  )
}

export default CategoryForm