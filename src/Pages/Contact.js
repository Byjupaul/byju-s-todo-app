const Contact = () => {
  return (
    <div>
      {/* <h3>Hello form Contact Us page!</h3>
      <p>Byjupaul Madathumpadi <br />
          Schwalbenweg 4 <br />
          51789 Lindlar <br />
          Email: byjupaulmp@gmail.com <br />
          Mob: 017669839435

      </p> */}
      <form action="" onSubmit="">
          <div className="formWord">
            <h2>Say Hello!</h2>
            <span>Full Name</span>
            <br />
            <input 
            className="input100"
            type="text"
            name="fullName"
            required 
            />
            <br />
            <span>Phone Number</span>
            <br />
            <input className="input100" type="number" name="phone" required />
            <br />
            <span>Enter Email</span>
            <br />
            <input className="input100" type="email" name="email" required />
            <br />
          </div>
          <div className="formWord">
            <span>Message</span>
            <br />
            <textarea name="message" required></textarea>
            <br />
            <button>SUBMIT</button>

            <div className="row"></div>
          </div>
      </form>
      </div>
    
  );
};

export default Contact;
