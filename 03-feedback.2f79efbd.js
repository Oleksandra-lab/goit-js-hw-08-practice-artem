const e=document.querySelector(".feedback-form");e.addEventListener("submit",(function(e){e.preventDefault();const a=e.target.elements.email.value,s=e.target.elements.message.value,r={email:a,message:s};t.push(r),localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(t),e.currentTarget.reset()})),e.reset();const t=JSON.parse(localStorage.getItem("feedback-form-state"))||[];
//# sourceMappingURL=03-feedback.2f79efbd.js.map
