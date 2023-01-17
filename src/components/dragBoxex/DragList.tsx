import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import React from 'react'
const DragList = ({ state, setState }: any) => {
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  function onDragEnd(result: any) {
  
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index,
    )
    setState({ quotes })
  }
  function Quote({ quote, index }: any) {
    return (
      <Draggable draggableId={quote.id} index={index}>
        {(provided) => (
          <div
            className="DragList__Quote"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="DragList__text">
              <span>
                <strong>{index + 1}</strong>
              </span>
              {/* <span>{quote.content}</span> */}
              <img
                src={quote.content}
                style={{
                  width: '100px',
                  height: '100px',
                }}
              />
            </div>
            <i className="fas fa-grip-lines"></i>
          </div>
        )}
      </Draggable>
    )
  }
  const QuoteList = React.memo(function QuoteList({ quotes }: any) {
    return quotes.map((quote: any, index: number) => (
      <Quote quote={quote} index={index} key={quote.id} />
    ))
  })
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" direction="vertical">
        {(provided) => (
          <div
            className="DragList__context"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <QuoteList quotes={state.quotes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragList
