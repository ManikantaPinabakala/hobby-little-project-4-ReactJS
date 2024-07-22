import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  AppContainer,
  LeftContainer,
  InstructionContainer,
  Instruction,
  WordList,
  NoInputsImage,
  WordListItem,
  EachWord,
  SpanElement,
  RightContainer,
  RightHeading,
  Form,
  InputElement,
  AddButton,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    wordList: [],
    inputValue: '',
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()

    const {inputValue} = this.state

    this.setState(prevState => ({
      wordList: [...prevState.wordList, {id: uuidv4(), word: inputValue}],
      inputValue: '',
    }))
  }

  render() {
    const {wordList, inputValue} = this.state

    return (
      <AppContainer>
        <LeftContainer>
          <InstructionContainer>
            <Instruction>
              Count the characters like a <br />
              Boss...
            </Instruction>
          </InstructionContainer>
          {wordList.length > 0 ? (
            <WordList>
              {wordList.map(eachWordItem => (
                <WordListItem key={eachWordItem.id}>
                  <EachWord>
                    {eachWordItem.word} :{' '}
                    <SpanElement>{eachWordItem.word.length}</SpanElement>
                  </EachWord>
                </WordListItem>
              ))}
            </WordList>
          ) : (
            <NoInputsImage
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </LeftContainer>
        <RightContainer>
          <RightHeading>Character Counter</RightHeading>
          <Form onSubmit={this.onClickAdd}>
            <InputElement
              type="text"
              placeholder="Enter the Characters here"
              value={inputValue}
              onChange={this.onChangeInput}
            />
            <AddButton type="submit">Add</AddButton>
          </Form>
        </RightContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
