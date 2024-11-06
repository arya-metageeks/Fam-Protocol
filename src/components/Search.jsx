import { useState } from "react";

const Search = ({setDomain}) => {
    
    const [domain, setTempDomain] = useState("");
    const handleDomain = async (e) =>{
        e.preventDefault();
        setDomain(domain);
    }
    return (
      <header>
        <p className="header__subtitle">Seek and buy available domain names</p>
        <h2 className="header__title">It all begins with a domain name.</h2>
        <div className="header__search">
        <form onSubmit={handleDomain}>

          <input
            type="text"
            className="header__input"
            placeholder="Find your domain"
            value={domain}
            onChange={(e) => setTempDomain(e.target.value)}
          />
          <button
            type="submit"
            className='header__button'
          >
            Buy It
          </button>
        </form>

        </div>
      </header>
    );
  }
  
  export default Search;