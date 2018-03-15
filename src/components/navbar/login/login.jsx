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
<div className="wrapper">
  <h1>Fun Food Friends</h1>
  {this.state.user ?
    <button onClick={this.logout}>Log Out</button>                
    :
    <button onClick={this.login}>Log In</button>              
  }
</div>

<div className='app'>
  <header>
    <div className="wrapper">
      <h1>Fun Food Friends</h1>
      {this.state.user ?
        <button onClick={this.logout}>Logout</button>                
        :
        <button onClick={this.login}>Log In</button>              
      }
    </div>
  </header>
  {this.state.user ?
    <div>
      <div className='user-profile'>
        <img src={this.state.user.photoURL} />
      </div>
    </div>
    :
    <div className='wrapper'>
      <p>You must be logged in to see the potluck list and submit to it.</p>
    </div>
  }
</div>

<div>
  <div className='user-profile'>
     <img src={this.state.user.photoURL} />
  </div>
  <div className='container'>
    <section className='add-item'>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
        <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
        <button>Add Item</button>
      </form>
    </section>
  </div>
</div>