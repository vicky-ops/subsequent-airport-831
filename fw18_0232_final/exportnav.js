let navbar=()=>{
    return `  <div id="image">
            
    <img id="image1" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"/>

</div>

<div id="buttons">
    <div id="first">
        <button id="firstb">
            <div id="pen">
            <img id="pen1" src="http://cdn.onlinewebfonts.com/svg/img_428525.png"/>
            </div>
            <div id="pen2">
            Review    
            </div>
        </button>
    </div>
    <div id="second">
        <button id="secondb">
            <div id="heart">
            <img id="heart1" src="data:image/png;base64,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"/>
            </div>
            <div id="heart2">
            Trips    
            </div></button>
    </div>
    <div id="third">
        <button id="thirdb">
            <div id="alert">
                <img id="alert1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Q8ondwWLF74353iD55mAZ8-azeD0Id8soucdSJ-kn_iTgEh9HjGu7Pnq72E6Qzlr5yI&usqp=CAU"/>
                </div>
                <div id="alert2">
                Alerts    
                </div>
        </button>
    </div>
    <div id="fourth">
      <div id="newsign">
        <button id="sign" onclick="openForm()">Sign in</button>
      </div>
      <div id="newsign2">
        
        
      </div>
    </div>


</div>        

</div>



<div class="loginPopup">
<div class="formPopup" id="popupForm">
<form class="formContainer">
    <div id="startimages">
        <img id="startimages1" src="data:image/jpeg;base64,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"/>
    <img id="startimages2" onclick="closeForm()" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9oHgp1VmJlA8a3XX1sBIv3oU6JRYDldxDA&usqp=CAU"/>
    </div>
    
  <h1>Welcome back</h1>
  <label for="email1">
    <strong>Email address</strong>
  </label>
  <input type="text" id="email1" placeholder="Email" name="email1" required>
  <label for="pass1">
    <strong>Password</strong>
  </label>
  <input type="password" id="pass1" placeholder="Password" name="pass1" required>
  <button onclick="mainfunc1(event)" class="btn33">Sign in</button>
   <h4 id="member">Not a member?</h4>
   <h4 id="newjoin" onclick="openForm2()" style="cursor:pointer"><u><b>Join</b></u> to unlock the best of Tripadvisor.</h4>
</form>
<p id="lastpara">By proceeding, you agree to our <u>Terms of Use </u>and confirm<br> you have read our <u>Privacy and Cookie Statement.</u><br>
 <br> This site is protected by reCAPTCHA and the Google<u> Privacy Policy</u> and<br><u> Terms of Service</u> apply.</p>

</div>
</div>












<div class="loginPopup">
<div class="formPopup" id="popupForm2">
  <form class="formContainer">
      <div id="startimages">
          <img id="startimages1" src="data:image/jpeg;base64,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"/>
      <img id="startimages2" onclick="closeForm2()" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9oHgp1VmJlA8a3XX1sBIv3oU6JRYDldxDA&usqp=CAU"/>
      </div>
      
    <h1 style="font-family:sans-serif">Join to unlock the best <br>of Tripadvisor</h1>
    
    <div id="namediv">
    <div id="namediv1"> <label for="First Name">
        <strong>First Name<br></strong>
      </label>
    
    <input type="text" id="firstname" placeholder="First Name" name="firstname" required>
</div>
<div id="namediv2">
      <label for="Second Name">
        <strong>Second Name</strong>
      </label>
      <input type="text" id="secondname" placeholder="Second Name" name="secondname" required>
    </div>
    </div>
      
    
    
    <label for="email">
      <strong>Email address</strong>
    </label>
    <input type="text" id="email2" placeholder="Email" name="email" required>
    <label for="pass2">
      <strong>Password</strong>
    </label>
    <input type="password" id="pass2" placeholder="Password" name="pass2" required>
    <p id="newpara"><input type="checkbox">&nbsp;&nbsp;Yes, &nbsp; inform &nbsp; me &nbsp; on &nbsp;deals &nbsp;& &nbsp;new&nbsp; features.&nbsp; I &nbsp;can &nbsp;opt &nbsp;out&nbsp; at &nbsp;any <br>&nbsp;time.</p>
    <button onclick="mainfunc2(event)" class="btn33" >Join</button>
      </form>
      <p id="lastpara2">By proceeding, you agree to our <u>Terms of Use </u>and confirm<br> you have read our <u>Privacy and Cookie Statement.</u><br>
        <br> This site is protected by reCAPTCHA and the Google<u> Privacy Policy</u> and<br><u> Terms of Service</u> apply.</p>

</div>`
}
export {navbar};
