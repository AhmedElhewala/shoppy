import{ak as t,o as a}from"./index-gK2J3_II.js";async function g(){try{let r=[];const o=(await a.get(`${t}/categories`)).data;return await Promise.all(o.map(async function(c){(await a.get(`${t}/categories/${c.id}/products`)).data.length>0&&r.push(c)})),r}catch(r){throw new Error(`Error fetching categories: ${r.message}`)}}async function d(){try{return(await a.get(`${t}/categories`)).data}catch(r){throw new Error(`Error fetching categories: ${r.message}`)}}async function u(r){try{return(await a.delete(`${t}/categories/${r}`)).data}catch(e){throw new Error(`Error deleting category with id ${r}: ${e.message}`)}}async function h(r){try{return(await a.post(`${t}/categories/`,r)).data}catch(e){throw new Error(`Failed adding this category: ${e.message}`)}}async function w(r,e){try{return(await a.put(`${t}/categories/${r}`,e)).data}catch(o){throw new Error(`Failed update category ${r}: ${o.message}`)}}export{h as a,d as b,u as d,g as f,w as u};