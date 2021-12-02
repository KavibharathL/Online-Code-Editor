window.onload = function(){
    for (var i = 0; i < document.getElementsByClassName("code").length; i++)
    document.getElementsByClassName("code")[i].style.height = document.querySelector(".code-editor").clientHeight - 40 + "px";



    let htmlEditor = ace.edit("html");
   htmlEditor.session.setMode("ace/mode/html");
   htmlEditor.setTheme("ace/theme/nord_dark");
   htmlEditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   
</body>
</html>`);

   htmlEditor.session.setUseWrapMode(true);
   htmlEditor.setShowPrintMargin(false);
   htmlEditor.session.on('change', function(delta) {
       // console.log(htmlEditor.getValue());
       update();
   });

   
   let cssEditor = ace.edit("css");
   cssEditor.session.setMode("ace/mode/css");
   cssEditor.setTheme("ace/theme/nord_dark");
   cssEditor.session.setUseWrapMode(true);
   cssEditor.setShowPrintMargin(false);
   cssEditor.session.on('change', function(delta) {
       // console.log(cssEditor.getValue());
       update();
   });

   let jsEditor = ace.edit("js");
   jsEditor.session.setMode("ace/mode/javascript");
   jsEditor.setTheme("ace/theme/nord_dark");
   jsEditor.session.setUseWrapMode(true);
   jsEditor.setShowPrintMargin(false);
   jsEditor.session.on('change', function(delta) {
       // console.log(jsEditor.getValue());
       update();      
   });

   function update(){
       let output = document.querySelector(".output .virtual-iframe").contentWindow.document;
       console.log(output);
       output.open(); 
       output.write("<style>"+cssEditor.getValue()+"</style>"+ htmlEditor.getValue()+ "<script>"+jsEditor.getValue()+"</script>");
       output.close();
   }
   let theme = 0;
   document.querySelector(".change-layout").addEventListener("click", function () {
    theme++;
    if(theme === 5) theme=0;
    switch (theme){
        case 0:
            htmlEditor.setTheme("ace/theme/nord_dark");
            jsEditor.setTheme("ace/theme/nord_dark");
            cssEditor.setTheme("ace/theme/nord_dark");
            break;
        case 1:
            htmlEditor.setTheme("ace/theme/terminal");
            jsEditor.setTheme("ace/theme/terminal");
            cssEditor.setTheme("ace/theme/terminal");
            break;
        case 2:
            htmlEditor.setTheme("ace/theme/twilight");
            jsEditor.setTheme("ace/theme/twilight");
            cssEditor.setTheme("ace/theme/twilight");
            break;
        case 3:
            htmlEditor.setTheme("ace/theme/ambiance");
            jsEditor.setTheme("ace/theme/ambiance");
            cssEditor.setTheme("ace/theme/ambiance");
            break;
        case 4:
            htmlEditor.setTheme("ace/theme/gob");
            jsEditor.setTheme("ace/theme/gob");
            cssEditor.setTheme("ace/theme/gob");
            break;
    }
    

})
 }
Split(['#split-0', '#split-1', '#split-2']);

// document.querySelector(".change-layout").addEventListener("click", function () {
//     layout++;
//     if (layout > 1) layout = 0;
//     changeLayout();
// })

