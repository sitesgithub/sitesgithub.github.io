javascript:
var BOATheme = 0; 
if (!document.getElementById('BOAOuterGUI')) {
    function BOACheckPass() {
        var BOAPassDiv = document.getElementById("BOALogin");
        var BOAPassword = document.getElementById("BOAPass").value;
        var BOAContents = document.getElementById("BOAContents");
        if (BOAPassword == BOAUIDMaker()) {
            BOAContents.style.display = "block";
            BOAPassDiv.style.display = "none"
        } else {
            document.getElementById("BOAWrongPass").style.display = "block";
            setTimeout(function() {
                document.getElementById("BOAWrongPass").style.display = "none"
            }, 3000)
        }
    };
    var BOAcipher = salt => {
        let textToChars = text => text.split('').map(c => c.charCodeAt(0));
        let byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        let applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
        return text => text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('')
    };
    var BOAdecipher = salt => {
        let textToChars = text => text.split('').map(c => c.charCodeAt(0));
        let saltChars = textToChars(salt);
        let applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g).map(hex => parseInt(hex, 16)).map(applySaltToChar).map(charCode => String.fromCharCode(charCode)).join('')
    };
    function BOAUIDMaker() {
        var navigator_info = window.navigator;
        var screen_info = window.screen;
        var uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';
        return uid;
    };
    var BbsDjisdiuw6AWYgsd81a = BOAUIDMaker();
    var iASUfg9823ag23h9807tg = BOAdecipher('4501012653736790394588537363768136624')
    var guMnAUfiunpajIOmi2189 = iASUfg9823ag23h9807tg('0a0b0e0f0e0f0c080b0d090d0809070e0d070a0b06060b0d090d080d0908060f0d08080c0a')

    function BOAEncrypt() {
        var BOAUnencryptedMessage = document.getElementById('BOAUnencryptedMessage').value;
        var BOAPasswordEncryptor = document.getElementById('BOAPasswordEncryptor').value;
        var BOAEncryptMessage = BOAcipher(BOAPasswordEncryptor);
        var BOAEncryptedMessage = BOAEncryptMessage(BOAUnencryptedMessage);
        document.getElementById('BOAEncryptedMessage').value = BOAEncryptedMessage;
        document.getElementById('BOAUnencryptedMessage').value = "";
        document.getElementById('BOAPasswordEncryptor').value = ""
    }

    function BOAVideoBypass() {
    var videobypass; //check if bypass has been ran
        if (window.location.host == "www.youtube.com" && window.location.pathname == "/watch") {
            var abc123456 = window.location.href.split('=')[1];
            if (videobypass) {} else {
                document.getElementsByClassName('style-scope yt-playability-error-supported-renderers')[0].innerHTML = `<iframe src="//www.youtube-nocookie.com/embed/${ abc123456 }" height="100%" width="100%" allowfullscreen></iframe>`; //changes error code to embed video (no cookie so doesn't check user)
                setInterval(function(){
                    if (window.location.host == "www.youtube.com" || !window.location.href == `https://www.youtube.com/watch?v=${abc123456}`) {
                        window.location.reload()
                    } //simple code to check if not on video anymore.
                }, 100)
                videobypass = true
            }
        } else {
            alert('You are not on a video! :(')
        }
    }

    function BOADecrypt() {
        var BOAUndecryptedMessage = document.getElementById('BOAUndecryptedMessage').value;
        var BOAMessageDecryptorPassword = document.getElementById('BOAMessageDecryptorPassword').value;
        var BOADecryptMessage = BOAdecipher(BOAMessageDecryptorPassword);
        var BOADecryptedMessage = BOADecryptMessage(BOAUndecryptedMessage);
        document.getElementById('BOADecryptedMessage').value = BOADecryptedMessage;
        document.getElementById('BOAUndecryptedMessage').value = "";
        document.getElementById('BOAMessageDecryptorPassword').value = ""
    }

    function BOATitle() {
        var titlepage = prompt("What would you like the name of the site to be?");
        document.title = titlepage
    }

    function BOAWebsite() {
        if (!document.getElementById('BOAEditorGUI')) {
            var BOAEditorCheck = false;
            var BOAEditorGUI = document.createElement('div');
            BOAEditorGUI.id = "BOAEditorGUI"
            BOAEditorGUI.style = "border: 3px solid orange; position: absolute; display: block; left: 176px; background-color: black; z-index: 2147483647; top: 116px; font-family: Arial;"
            BOAEditorGUI.innerHTML = '<div id="BOAWebsiteEdit" style="background-color: orange; cursor: move;"><button id="BOAEditClose" style="position:absolute;top: -2px;color: white;text-align: right;display: inline-block;background-color:transparent;font-family:Arial;font-size: 15px;text-decoration:none;border: none;right: 0px;">X</button><h3 style="color: white;margin: 0 auto;text-align: center;margin-left: 30px;margin-right: 30px;">Website Editor</h3></div><br><center><p id="BOAEditStatus" style="color:white;">Status: Off</p><br><button id="BOAEditToggle" style="background-color: gray;border: none;width: 95%;padding: 10px;color:white;">Toggle On/Off</button><br><br></center>';
            document.getElementsByTagName('body')[0].appendChild(BOAEditorGUI);
            dragElement(document.getElementById(("BOAEditorGUI")));
            BOAEditorisOn = true;
            if (BOATheme == 1) {
                document.getElementById('BOAEditorGUI').className = "BOAKahootBorder";
                document.getElementById('BOAWebsiteEdit').className = "BOAKahootBG";
            } else if (BOATheme == 2) {
                document.getElementById('BOAEditorGUI').className = "BOARainbowBorder";
                document.getElementById('BOAWebsiteEdit').className = "BOARainbowBG";
            } else {
                document.getElementById('BOAEditorGUI').style.borderColor = document.getElementById('BOAMainGUI').style.backgroundColor
                document.getElementById('BOAWebsiteEdit').style.backgroundColor = document.getElementById('BOAMainGUI').style.backgroundColor
            }
            function BOAEditToggler(){
                    if (BOAEditorCheck) {
                        document.body.contentEditable = 'false';
                        document.designMode = 'off';
                        document.getElementById('BOAEditStatus').innerText = "Status: Off";
                        BOAEditorCheck = false;
                        void 0;
                    } else {
                        document.body.contentEditable = 'true';
                        document.designMode = 'on';
                        document.getElementById('BOAEditStatus').innerText = "Status: On";
                        BOAEditorCheck = true;
                        void 0;
                    }
                }
            var BOACSPEditor = document.getElementById("BOAEditToggle");
            if (BOACSPEditor.addEventListener) {
                BOACSPEditor.addEventListener("click", BOAEditToggler, false)
            } else if (BOACSPEditor.attachEvent) {
                BOACSPEditor.attachEvent('onclick', BOAEditToggler
                )
            }
            var BOACSPEditorClose = document.getElementById("BOAEditClose");
            if (BOACSPEditorClose.addEventListener) {
                BOACSPEditorClose.addEventListener("click", function(){document.getElementById('BOAEditorGUI').remove();document.body.contentEditable = 'false';document.designMode = 'off';void 0;BOAEditorisOn = false;}, false)
            } else if (BOACSPEditorClose.attachEvent) {
                BOACSPEditorClose.attachEvent('onclick', function(){document.getElementById('BOAEditorGUI').remove();document.body.contentEditable = 'false';document.designMode = 'off';void 0;BOAEditorisOn = false;}
                )
            }} else {};
    }
    function BOAWebsiteDestroyer() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        document.body.appendChild(s);
        s.src = '//sitesgithub.github.io/bored.js';
        void(0)
    }

    function BOAWebsiteShake() {
        setInterval(function() {
            (function() {
                ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
                    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el) {
                        el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'
                    })
                })
            }())
        }, 100)
    }

    function BOACoinflip() {
        var BOACoinflip = Math.floor((Math.random() * 2) + 1);
        if (BOACoinflip == "1") {
            document.getElementById("BOACoinflipMessage").innerHTML = "Heads wins!"
        } else {
            document.getElementById("BOACoinflipMessage").innerHTML = "Tails wins!"
        }
    }
    function BOAKahootTheme(){
        BOATheme = 1;
        document.getElementById('BOAOuterGUI').className = "BOAKahootBorder";
        document.getElementById('BOAMainGUI').className = "BOAKahootBG";
        document.getElementById('BOAEditorGUI').className = "BOAKahootBorder";
        document.getElementById('BOAWebsiteEdit').className = "BOAKahootBG";
    }
    function BOARainbowTheme(){
        BOATheme = 2;
        document.getElementById('BOAOuterGUI').className = "BOARainbowBorder";
        document.getElementById('BOAMainGUI').className = "BOARainbowBG";
        document.getElementById('BOAEditorGUI').className = "BOARainbowBorder";
        document.getElementById('BOAWebsiteEdit').className = "BOARainbowBG";
    }
    function BOAColor(color){
        BOATheme = color;
        document.getElementById('BOAOuterGUI').style.borderColor = color;
        document.getElementById('BOAMainGUI').style.backgroundColor = color;
        document.getElementById('BOAOuterGUI').className = '';
        document.getElementById('BOAMainGUI').className = '';
        document.getElementById('BOAEditorGUI').style.borderColor = color;
        document.getElementById('BOAWebsiteEdit').style.backgroundColor = color;
        document.getElementById('BOAEditorGUI').className = '';
        document.getElementById('BOAWebsiteEdit').className = '';
    };
    var BOAOuterDiv = document.createElement('div');
    BOAOuterDiv.id = 'BOAOuterGUI';
    BOAOuterDiv.style = 'border: 3px solid green; position: absolute; display: block; top: 25%; left: 42%; background-color: black; z-index: 2147483647;';
    BOAOuterDiv.className = "BOARainbowBorder"
    BOAOuterDiv.innerHTML = `
    <div id="BOAMainGUI" style="background-color: green; cursor: move;" class="BOARainbowBG">
    <style>@keyframes bgcolor{
        0%{
            background-color: #45a3e5
        }
        30%{
            background-color: #66bf39
        }
        60%{
            background-color: #eb670f
        }
        90%{
            background-color: #f35
        }
        100%{
            background-color: #864cbf
        }
    }
    .BOAKahootBG{
        -webkit-animation: bgcolor 20s infinite;
         animation: bgcolor 10s infinite;
         -webkit-animation-direction: alternate;
         animation-direction: alternate;
    }
    @keyframes bordercolor{
        0%{
            border-color: #45a3e5
        }
        30%{
            border-color: #66bf39
        }
        60%{
            border-color: #eb670f
        }
        90%{
            border-color: #f35
        }
        100%{
            border-color: #864cbf
        }
    }
    .BOAKahootBorder{
        -webkit-animation: bordercolor 20s infinite;
         animation: bordercolor 10s infinite;
         -webkit-animation-direction: alternate;
         animation-direction: alternate;
    }
    @keyframes BOARainbowBG{
        100%,0%{
            background-color: rgb(255,0,0);
        }
        8%{
            background-color: rgb(255,127,0);
        }
        16%{
            background-color: rgb(255,255,0);
        }
        25%{
            background-color: rgb(127,255,0);
        }
        33%{
            background-color: rgb(0,255,0);
        }
        41%{
            background-color: rgb(0,255,127);
        }
        50%{
            background-color: rgb(0,255,255);
        }
        58%{
            background-color: rgb(0,127,255);
        }
        66%{
            background-color: rgb(0,0,255);
        }
        75%{
            background-color: rgb(127,0,255);
        }
        83%{
            background-color: rgb(255,0,255);
        }
        91%{
            background-color: rgb(255,0,127);
        }
    }
    .BOARainbowBG{
        animation: BOARainbowBG 2.5s linear;
        animation-iteration-count: infinite;
    }
    @keyframes BOARainbowBorder{
        100%,0%{
            border-color: rgb(255,0,0);
        }
        8%{
            border-color: rgb(255,127,0);
        }
        16%{
            border-color: rgb(255,255,0);
        }
        25%{
            border-color: rgb(127,255,0);
        }
        33%{
            border-color: rgb(0,255,0);
        }
        41%{
            border-color: rgb(0,255,127);
        }
        50%{
            border-color: rgb(0,255,255);
        }
        58%{
            border-color: rgb(0,127,255);
        }
        66%{
            border-color: rgb(0,0,255);
        }
        75%{
            border-color: rgb(127,0,255);
        }
        83%{
            border-color: rgb(255,0,255);
        }
        91%{
            border-color: rgb(255,0,127);
        }
    }
    .BOARainbowBorder{
        animation: BOARainbowBorder 2.5s linear;
        animation-iteration-count: infinite;
    }
    </style>
    <button style="position:absolute;top: -2px;color: white;text-align: right;display: inline-block;background-color:transparent;font-family:Arial;font-size: 30px;text-decoration:none;border: none;right: -5px;" id="BOAClose">X</button>
    <h3 style="font-family: Arial;color: white;margin: 0 auto;text-align: center;margin-left: 30px;margin-right: 30px;position: relative;top: 5px;right: 7px;">Bundle of Awesome</h3>
    <br>
 </div>
 <div id="BOALogin">
    <br>
    <h4 style="font-family: Arial; color: white; text-align: center;">Enter Password</h4>
    <br><input id="BOAPass" type="password" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Password Here"><br>
    <div style="text-align: center;">
       <button id="BOALoginButton" style="margin: 0 auto; display: block; background-color:green;border:none;color:#fff;padding:15px 32px;text-decoration:none;display:inline-block;font-size:16px;text-align: center;">Login!</button> <br>
       <p style="color:white; font-family:arial; text-align: center;"><a href="http://keybase.io/orrangu">© http://keybase.io/orrangu</a></p>
    </div>
 </div>
 <div id="BOAContents" style="display:none; height: 300px; overflow-y:scroll;">
    <br>
    <button id="BOATitle" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Title Page Changer</button>
    <br>
    <button id="BOAWebsiteEditor" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;" >Website Editor</button>
    <br>
    <button id="BOAWebsiteDestroyer" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Bored?</button>
    <br>
    <button id="BOAWebsiteShake" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Website Shake</button>
    <br>
    <button id="BOACoinflip" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Coinflip</button> 
    <p id="BOACoinflipMessage" style="color: white; font-family: Arial; text-align: center;"></p>
    <p style="color: white; font-family: Arial; text-align: center;">Put your message password!</p>
    <input id="BOAPasswordEncryptor" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Password Here"> 
    <p style="color: white; font-family: Arial; text-align: center;">Put your message!</p>
    <input id="BOAUnencryptedMessage" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Message Here"> 
    <p style="color: white; font-family: Arial; text-align: center;">Result:</p>
    <input id="BOAEncryptedMessage" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Encrypted Message" readonly> <br><button id="BOAEncryptor" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Encrypt Message</button> <br>
    <p style="color: white; font-family: Arial; text-align: center;">Put the password to decrypt!</p>
    <input id="BOAMessageDecryptorPassword" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Password Here"> 
    <p style="color: white; font-family: Arial; text-align: center;">Put the message to decrypt!</p>
    <input id="BOAUndecryptedMessage" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Message Here"> 
    <p style="color: white; font-family: Arial; text-align: center;">Result:</p>
    <input id="BOADecryptedMessage" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Message Here" readonly> <br><button id="BOADecryptor" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Decrypt Message</button>
<br>
<button id="BOAVideoBypass" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Video Blocked Bypass</button> <br>
    <h3 style="color: white; font-family: Arial; text-align: center;">Colors:</h3>
    <br><button id="BOAKahootTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Kahoot</button>
    <br>
    <button id="BOARainbowTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Chroma</button>
    <br>
    <button id="BOARedTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Red</button>
    <br>
    <button id="BOAOrangeTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Orange</button>
    <br>
    <button id="BOAYellowTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Yellow</button>
    <br>
    <button id="BOAGreenTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Green</button>
    <br>
    <button id="BOABlueTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Blue</button>
    <br>
    <button id="BOAIndigoTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Indigo</button>
    <br>
    <button id="BOAVioletTheme" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Violet</button>
    <br>
    <p style="color: white; font-family: Arial; text-align: center;">Hex Color Code:</p>
    <input id="BOAHexColor" pattern="[\#]" type="text" style="margin: 0 auto;display: block;margin-right: auto;margin-left: auto;" placeholder="Hex Color Here">
    <br>
    <button id="BOAHexConfirm" style="margin: 0 auto; display: block; -webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.16,#cfcfcf),color-stop(.79,#fcfcfc));background-image:-moz-linear-gradient(center bottom,#cfcfcf 16%,#fcfcfc 79%);background-image:linear-gradient(to top,#cfcfcf 16%,#fcfcfc 79%);padding:3px;border:1px solid #000;color:#000;text-decoration:none;">Change</button>
 </div>`;
    document.getElementsByTagName('body')[0].appendChild(BOAOuterDiv);
    dragElement(document.getElementById(("BOAOuterGUI")));
    if (BOATheme == 1) {
        document.getElementById('BOAOuterGUI').className = "BOAKahootBorder";
        document.getElementById('BOAMainGUI').className = "BOAKahootBG";
    }
    function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
            elmnt.onmousedown = dragMouseDown

        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag
        }

        function elementDrag(e) {
            e = e || window.event;
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null
        }
    }
    document.getElementById('BOAClose').onclick = function() {
        closewindow()
    };

    function closewindow() {
        document.getElementById('BOAOuterGUI').remove()
        document.getElementById('BOAEditorGUI').remove()
        document.body.contentEditable = 'false';
        document.designMode = 'off';
        void 0;
    }
    //Content Policy Bypass
    var BOACSPBypass0 = document.getElementById("BOALoginButton");
    if (BOACSPBypass0.addEventListener) {
        BOACSPBypass0.addEventListener("click", BOACheckPass, false)
    } else if (BOACSPBypass0.attachEvent) {
        BOACSPBypass0.attachEvent('onclick', BOACheckPass)
    }
    var BOACSPBypass1 = document.getElementById("BOATitle");
    if (BOACSPBypass1.addEventListener) {
        BOACSPBypass1.addEventListener("click", BOATitle, false)
    } else if (BOACSPBypass1.attachEvent) {
        BOACSPBypass1.attachEvent('onclick', BOATitle)
    }
    var BOACSPBypass2 = document.getElementById("BOAWebsiteEditor");
    if (BOACSPBypass2.addEventListener) {
        BOACSPBypass2.addEventListener("click", BOAWebsite, false)
    } else if (BOACSPBypass2.attachEvent) {
        BOACSPBypass2.attachEvent('onclick', BOAWebsite)
    }
    var BOACSPBypass3 = document.getElementById("BOAWebsiteDestroyer");
    if (BOACSPBypass3.addEventListener) {
        BOACSPBypass3.addEventListener("click", BOAWebsiteDestroyer, false)
    } else if (BOACSPBypass3.attachEvent) {
        BOACSPBypass3.attachEvent('onclick', BOAWebsiteDestroyer)
    }
    var BOACSPBypass4 = document.getElementById("BOAWebsiteShake");
    if (BOACSPBypass4.addEventListener) {
        BOACSPBypass4.addEventListener("click", BOAWebsiteShake, false)
    } else if (BOACSPBypass4.attachEvent) {
        BOACSPBypass4.attachEvent('onclick', BOAWebsiteShake)
    }
    var BOACSPBypass5 = document.getElementById("BOACoinflip");
    if (BOACSPBypass5.addEventListener) {
        BOACSPBypass5.addEventListener("click", BOACoinflip, false)
    } else if (BOACSPBypass5.attachEvent) {
        BOACSPBypass5.attachEvent('onclick', BOACoinflip)
    }
    var BOACSPBypass6 = document.getElementById("BOAEncryptor");
    if (BOACSPBypass6.addEventListener) {
        BOACSPBypass6.addEventListener("click", BOAEncrypt, false)
    } else if (BOACSPBypass6.attachEvent) {
        BOACSPBypass6.attachEvent('onclick', BOAEncrypt)
    }
    var BOACSPBypass7 = document.getElementById("BOADecryptor");
    if (BOACSPBypass7.addEventListener) {
        BOACSPBypass7.addEventListener("click", BOADecrypt, false)
    } else if (BOACSPBypass7.attachEvent) {
        BOACSPBypass7.attachEvent('onclick', BOADecrypt)
    }
    var BOACSPBypass8 = document.getElementById("BOAVideoBypass");
    if (BOACSPBypass8.addEventListener) {
        BOACSPBypass8.addEventListener("click", BOAVideoBypass, false)
    } else if (BOACSPBypass8.attachEvent) {
        BOACSPBypass8.attachEvent('onclick', BOAVideoBypass
        )
    }
    var BOACSPBypass9 = document.getElementById("BOAKahootTheme");
    if (BOACSPBypass9.addEventListener) {
        BOACSPBypass9.addEventListener("click", BOAKahootTheme, false)
    } else if (BOACSPBypass9.attachEvent) {
        BOACSPBypass9.attachEvent('onclick', BOAKahootTheme
        )
    }
    var BOACSPBypass10 = document.getElementById("BOARainbowTheme");
    if (BOACSPBypass10.addEventListener) {
        BOACSPBypass10.addEventListener("click", BOARainbowTheme, false)
    } else if (BOACSPBypass10.attachEvent) {
        BOACSPBypass10.attachEvent('onclick', BOARainbowTheme
        )
    }
    document.getElementById('BOARedTheme').onclick = function() {
        BOAColor('red');
    };
    document.getElementById('BOAOrangeTheme').onclick = function() {
        BOAColor('orange');
    };
    document.getElementById('BOAYellowTheme').onclick = function() {
        BOAColor('yellow');
    };
    document.getElementById('BOAGreenTheme').onclick = function() {
        BOAColor('green');
    };
    document.getElementById('BOABlueTheme').onclick = function() {
        BOAColor('blue');
    };
    document.getElementById('BOAIndigoTheme').onclick = function() {
        BOAColor('indigo');
    };
    document.getElementById('BOAVioletTheme').onclick = function() {
        BOAColor('violet');
    };
    document.getElementById('BOAHexConfirm').onclick = function() {
        BOAColor(document.getElementById('BOAHexColor').value)
    };
    if (BbsDjisdiuw6AWYgsd81a != guMnAUfiunpajIOmi2189) {
        window.location.href = "https://www.youtube.com/watch?v=6n3pFFPSlW4"
    } else {
        document.getElementById("BOAContents").style.display = "block";
        document.getElementById("BOALogin").style.display = "none";
        
    }} else {};
