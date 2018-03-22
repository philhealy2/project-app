import React from 'react';
import './App.css';

    
    class Contact extends React.Component {
      render() {
        return (
            <div className="col-sm-3" >
              <div className="panel panel-primary">
                
                <div className="panel-body"> 
                  <p>{ this.props.contact.name }</p>
                    <p>{ this.props.contact.ingredients }</p>
                    <p>{ this.props.contact.method }</p>              
                </div>
                <div className="panel-footer"> 
                  <div className="btn-group btn-group-justified" role="group" aria-label="...">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default">Modify</button>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-danger">Remove</button>
                      </div>
                  </div>                     
                </div>          
              </div>
            </div>
            ) ;
        }
    }

    class ContactList extends React.Component {
      render() {
          let contactRows = this.props.contacts.map(
                (c) => <Contact key={c.method} contact={c} />
          );
          return (
            <div className="container-fluid contacts">
              <div className="row">
                 {contactRows}  
              </div>
              </div>
            ) ;
        }
    }

   class Header extends React.Component {
      render(){
    return (
      <header>
        <div class="header">
        <h1>Cooking Corner</h1>
        <img src="cook.png" />
       <nav id="bar">
        <ul>
            <li><a href= "./info/initial-entries.js"> Recipes </a></li>
            <li><a href= "./elements/add.js"> Add New</a></li>
            <li><a href= "shoplist.js"> Shopping List </a></li>
        </ul>    
      </nav>
      </div>

        </header>
    );
  }
}


    class ContactsApp extends React.Component {
      render() {
          return (
                <div className="jumbotron">
                   <Header noContacts={this.props.contacts.length} />
                 
                   <ContactList contacts={this.props.contacts}  />
                </div>

          );
      }
    }

    export default ContactsApp;