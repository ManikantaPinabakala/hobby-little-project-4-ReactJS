import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftContainer = styled.div`
  min-height: 550px;
  min-width: 660px;
  background-color: #ffc533;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const InstructionContainer = styled.div`
  background-color: #ffbf1f;
  padding: 10px 30px;
`

export const Instruction = styled.h1`
  color: #334155;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.75;
`

export const WordList = styled.ul`
  list-style: none;
  height: 300px;
  overflow: auto;
`

export const NoInputsImage = styled.img`
  width: 60%;
  align-self: center;
  margin-top: 30px;
`

export const WordListItem = styled.li``

export const EachWord = styled.p`
  color: #0f172a;
  font-size: 24px;
  font-weight: bold;
`

export const SpanElement = styled.span`
  font-size: 28px;
`

export const RightContainer = styled.div`
  min-height: 550px;
  background-color: #272c47;
  padding: 20px;
`

export const RightHeading = styled.h1`
  color: #ffc533;
  text-align: center;
  margin-block: 30px 50px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const InputElement = styled.input`
  min-width: 450px;
  font-size: 20px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #475569;
  border-radius: 10px;
  outline: none;
`

export const AddButton = styled.button`
  background-color: #ffc533;
  padding: 20px 30px;
  color: #1e293b;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
