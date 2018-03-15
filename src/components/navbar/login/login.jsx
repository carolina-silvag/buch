<section className='display-item'>
  <div className="wrapper">
    <ul>
      {this.state.items.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>brought by: {item.user}</p>
          </li>
        )
      })}
    </ul>
  </div>
</section>

{this.state.items.map((item) => {
    return (
      <li key={item.id}>
        <h3>{item.title}</h3>
        <p>brought by: {item.user}</p>
        <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
      </li>
    )
  })
}