import{n as Y,o as _,u as e,r as h,f as c,p as G,q as N,s as T,t as O,D as C,j as t,v as S,w as k,x as A,_ as E,L as B,g as V}from"./index-gK2J3_II.js";import{u as U}from"./index.esm-Mn0qej-Y.js";import{F as m}from"./FormRowItem-N8q73qFe.js";import{f as u,a as Q}from"./helpers-o6nrGciX.js";async function X(r){try{const i=await _.get(`
      https://api.opencagedata.com/geocode/v1/json?key=${Y}&q=${r.latitude}+${r.longitude}&pretty=1
    `),d=i.data.results[0].components.country,s=i.data.results[0].components.state,l=i.data.results[0].components.road;return{country:d,state:s,road:l}}catch(i){throw new Error(`Error fetching the location ${i.message}`)}}const J=e.form`
  width: 100%;
  padding: 40px 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  color: var(--color-grey-800);

  &::before {
    content: "";
    height: 50%;
    width: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(50%);
  }

  @media screen and (max-width: 767px) {
    &::before {
      content: none;
    }
  }
`,P=e.div`
  width: calc(50% - 5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,y=e.input`
  flex-basis: 80%;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }
`,W=e.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: start;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);
`,Z=e.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,tt=e.h4`
  font-size: 1.4rem;
  transition: var(--main-transition);
`,I=e.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);
`,D=e.input`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  transition: var(--main-transition);
`,q=e.label`
  font-size: 1.4rem;
  cursor: pointer;
  transition: var(--main-transition);
`,et=e.div`
  width: 80%;
  position: relative;
  transition: var(--main-transition);

  >svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    font-size: 1.8rem;
    color: #000;
  }
`,nt=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,it=e.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,ot=e.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  transition: var(--main-transition);

  >span {
    font-weight: bold;
  }
`,rt=e.span`
  font-weight: bold;
  transition: var(--main-transition);
`,at=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
  transition: var(--main-transition);

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    top: -1.5rem;
    left: 0;
  }
`,x=e.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);

  >span {
    font-weight: bold;
  }
`,st=e.p`
  margin-top: 1rem;
  width: 100%;
  line-height: 1.8;
  transition: var(--main-transition);

  >span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`,ct=e.button`
  width: 30rem;
  margin: 0 auto;
  padding: 8px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #efefef;
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  position: relative;
  cursor: pointer;
  font-weight: bold;
  transition: var(--main-transition);

  >svg {
    font-size: 1.8rem;
  }
`;function dt(){var b,j;const{register:r,formState:i,handleSubmit:d}=U(),[s,l]=h.useState("cash"),[g,f]=h.useState(""),{errors:a}=i,$=c(G),L=N(),p=c(T),z=c(O),v=p*k,F=new Date,M=new Date(F.getTime()+C*24*60*60*1e3);h.useEffect(()=>{try{navigator.geolocation.getCurrentPosition(n=>{const K={latitude:n.coords.latitude,longitude:n.coords.longitude};X(K).then(o=>{f(`${o.country&&o.country!=null?o.country+",":""} ${o.state&&o.state!=null?o.state+",":""} ${o.road&&o.road!=null?o.road:""}`)})})}catch(n){throw new Error(`Faild to get location: ${n.message}`)}},[]);function R(n){f(n.target.value)}function w(n){l(n.target.value)}function H(){try{L(A()),E.success("Your cart successfully checked out, Congratulations! Hope to see you more 🥳")}catch(n){throw E.error("Unfortunately, something went wrong. Please check your data and try again!"),new Error(`The check out process faild: ${n.message}`)}}return t.jsxs(J,{onSubmit:d(H),noValidate:!0,children:[t.jsxs(P,{children:[t.jsx(m,{label:"Location",error:g?"":"This field is required",children:t.jsx(y,{id:"locationInput",type:"text",placeholder:"Enter your location",name:"location",value:g,onChange:R})},"location input"),t.jsx(m,{label:"Phone number",error:(b=a==null?void 0:a.phone)==null?void 0:b.message,children:t.jsx(y,{id:"phoneInput",type:"tel",placeholder:"Enter your phone number",name:"phone",...r("phone",{required:"This field is required",pattern:{value:/^\d+$/,message:"Please provide a valid phone number"}})})},"phone input"),t.jsxs(W,{children:[t.jsx(tt,{children:"Payment Method"}),t.jsxs(Z,{children:[t.jsxs(I,{children:[t.jsx(D,{id:"cash",type:"radio",name:"payment",value:"cash",checked:s==="cash",onChange:w}),t.jsx(q,{htmlFor:"cash",children:"Pay cash when delivery"})]},"cash"),t.jsxs(I,{children:[t.jsx(D,{id:"credit",type:"radio",name:"payment",value:"credit",checked:s==="credit",onChange:w}),t.jsx(q,{htmlFor:"credit",children:"Pay online with credit card"})]},"credit")]})]}),s==="credit"&&t.jsx(m,{label:"Credit Key",error:(j=a==null?void 0:a.creditKey)==null?void 0:j.message,children:t.jsxs(et,{children:[t.jsx(S,{}),t.jsx(y,{id:"creditKey",style:{textIndent:"3rem",width:"100%"},type:"text",name:"creditKey",placeholder:"Enter your credit key",...r("creditKey",{required:"This field is required",pattern:{value:/^\d{12,}$/,message:"Please provide a valid credit key"}})})]})},"creditKey input")]},"user"),t.jsxs(P,{children:[t.jsx(nt,{children:$.map(n=>t.jsxs(it,{children:[t.jsxs(ot,{children:[n.title," ",t.jsxs("span",{children:["x",n.quantity]})]}),t.jsx(rt,{children:u(n.totalPrice)})]},n.id))}),t.jsxs(at,{children:[t.jsxs(x,{children:["Items in the cart:",t.jsx("span",{children:p})]},"quantity"),t.jsxs(x,{children:["Delivery cost:",t.jsxs("span",{children:[p," * ",k," = ",u(v)]})]},"delivery"),t.jsxs(x,{children:["Total price:",t.jsx("span",{children:u(z+v)})]},"price")]})]},"cart"),t.jsxs(st,{children:["The delivery of your products will take maximum ",t.jsx("span",{children:C}),"days, before ",t.jsx("span",{children:Q(M)})," your products will be with you."]}),t.jsxs(ct,{type:"submit",children:[t.jsx(S,{}),"Check out"]})]})}const lt=e.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
`,pt=e.p`
  line-height: 1.6;
  font-weight: bold;
`,ht=e(B)`
  padding: 6px 20px;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 2px var(--color-grey-500);;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
`;function mt(){return t.jsxs(lt,{children:[t.jsx(pt,{children:"Your cart is currently empty, please go add some items 😀"}),t.jsx(ht,{to:"/product",children:"Go to products"})]})}const ut=e.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,yt=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    bottom: -1.5rem;
    left: 0;
  }
`,xt=e.h3`
  
`,gt=e.span`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;function jt(){const r=c(V),i=c(T);return t.jsxs(ut,{children:[t.jsxs(yt,{children:[t.jsx(xt,{children:`${r.name}'s check out`}),t.jsx(gt,{children:r.email})]}),i>0?t.jsx(dt,{}):t.jsx(mt,{})]})}export{jt as default};
