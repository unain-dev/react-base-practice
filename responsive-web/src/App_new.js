// import { useMediaQuery } from "react-responsive";

// function App() {
//   const isPc = useMediaQuery({
//     query: "(min-width:1024px)",
//   });
//   const isTablet = useMediaQuery({
//     query: "(min-width:768px) and (max-width:1023px)",
//   });
//   const isMobile = useMediaQuery({
//     query: "(max-width:767px)",
//   });

//   return (
//     <div>
//       {isPc && <p>HI PC</p>}
//       {isTablet && <p>HI Tablet</p>}
//       {isMobile && <p>HI Mobile</p>}
//     </div>
//   );
// }

import React from "react";
import { Mobile, PC } from "./MediaQuery";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Mobile>
          <div className="mobile_container">이건 모바일 !!</div>
        </Mobile>
      </div>

      <div className="pc_container">
        <PC>요건 PC !!!</PC>
      </div>
    </>
  );
}

export default App;
