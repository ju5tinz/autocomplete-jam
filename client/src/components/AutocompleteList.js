import './AutocompleteList.css'

function AutocompleteList({ list }) {
  return (
    <div id="list-cntr">
      {list.map((item, index) =>
        <div key={index}>
          {item}
        </div>
      )}
    </div>
  )
}

export default AutocompleteList;