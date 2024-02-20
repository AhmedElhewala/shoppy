import styled from "styled-components"

const FormRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--color-grey-800);
  gap: 1rem;
  position: relative;
`

const InputLabelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const RowLabel = styled.label`
  flex: 1;
  font-size: 1.4rem;
  font-weight: bold;
`

const RowError = styled.span`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #c22020;
  padding-left: 20%;
  letter-spacing: 0.5px;
  font-weight: bold;
  letter-spacing: 0.5px;
`

function FormRowItem({label, children, error}) {

  return (
    <FormRowContainer>
      <InputLabelContainer>
        {label && 
          <RowLabel 
            htmlFor={Array.isArray(children) ? children[0].props.id : children.props.id}
          >
            {label}
          </RowLabel>
        }
        {children}
      </InputLabelContainer>
      {error && <RowError>{error}</RowError>}
    </FormRowContainer>
  )
}

export default FormRowItem