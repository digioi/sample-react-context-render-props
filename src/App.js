import React from 'react';
import "./App.css"
import NavigationContext from './navigation-context'

const useWindowHash = () => {
  const [currentHash, updateHash] = React.useState(decodeURI(window.location.hash.substr(1)))
  React.useEffect(() => {
    const changeFn = () => {
      updateHash(decodeURI(window.location.hash.substr(1)))
    }
    window.addEventListener('hashchange', changeFn);
    return () => {
      window.removeEventListener('hashchange', changeFn);
    }
  }, [])
  return currentHash
}

const linkData = [
  { label: "link 1", url: "#link 1"},
  { label: "link 2", url: "#link 2" },
  { label: "link 3", url: "#link 3" },
  { label: "link 4", url: "#link 4" },
  { label: "link 5", url: "#link 5" },

]


// function App() {
//   const currentHash = useWindowHash()
//   return (
//     <div>
//       <h1 style={{margin: "10px 25px"}}>{currentHash}</h1>
//       <nav>
//         {linkData.map(({ label, url }, index) => (<a key={`link-${index}`} href={url}>{label}</a>))}
//       </nav>
//     </div>
//   );
// }


const NavigationList = (props)=> (
  <nav>
    {props.data.map(({label, url}, index)=> (<props.renderProp key={`link-${index}`} url={url} label={label} />))}
  </nav>
);

function App() {
  const currentHash = useWindowHash();
  const RenderLink = React.useContext(NavigationContext);
  return (
    <div>
      <h1 style={{margin: "10px 25px"}}>{currentHash}</h1>
      <NavigationList data={linkData} renderProp={RenderLink} />
    </div>
  );
}

export default App;
