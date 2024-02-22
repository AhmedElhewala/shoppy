import{u as e,e as n,f as r,g as s,a as l,r as d,j as t,O as c,L as p}from"./index-tiG3UDW2.js";import{l as h,a as x}from"./logo-dark-MSfGP5lV.js";const g=e.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/shopping pattern.png");
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    position: absolute;
    top: 0;
    left: 0;
  }
`,m=e.div`
  width: 50%;
  height: max-content;
  padding: 30px 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  position: relative;
  z-index: 99;
  
  @media screen and (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 70%;
  }
`,u=e(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
  color: var(--color-grey-900);

  >span {
    display: inline-block;
    font-size: 2.6rem;
    filter: drop-shadow(0 1px 4px var(--color-grey-500));
  }
`,f=e.img`
  display: block;
  max-width: 3.4rem;
  transition: var(--main-transition);
  filter: drop-shadow(0 1px 4px var(--color-grey-500));

  @media screen and (max-width: 767px) {
    max-width: 2.4rem;
  }
`;function w(){const{isDark:i}=n(),o=r(s),a=l();return d.useEffect(()=>{o&&a(-1,{replace:!0})},[o]),t.jsx(g,{children:t.jsxs(m,{children:[t.jsxs(u,{to:"/",children:[t.jsx(f,{src:i?h:x,alt:"Shoopy Logo"}),t.jsx("span",{children:"Shoppy"})]}),t.jsx(c,{})]})})}export{w as default};
