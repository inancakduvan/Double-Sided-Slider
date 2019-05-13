# Double-Sided-Slider
A double-sided-slider that you can use when you present different items(e.g image/text) for the same content. <br/><br/>
You can see a demo project here: <a href="https://inancakduvan.github.io/double-sided-slider/">Visit website<a/> <br/><br/>
Only CSS and Vanilla Javascript is used.
No setup is required. Easy to create and use.
  
# Install 

<p> Add the style link in your head tag: </p>
<pre> <span><</span>link rel="stylesheet" href="https://res.cloudinary.com/dd2ownqt9/raw/upload/v1557702188/style.min_molnj7.css"<span>></span> </pre>
<br/>
<p>Add the script tag just before the end of the body: </p>
<pre><span><</span>script src="https://res.cloudinary.com/dd2ownqt9/raw/upload/v1557702102/double-sided-slider.min_acfmjk.js"<span>></span></script></pre>  

# Usage

<h1> HTML CODE: </h1>

<pre>
<p><span><</span>div id="double-sided-slider">

<span><</span>div class="sliderHeading"> Heading 1 <span><</span>/div>
<span><</span>div class="sliderContent"> 
  Here is the content of the text. You can give your information in this part.
  Just write here whatevet you want. 
<span><</span>/div>
<span><</span>div class="sliderImage" data-image="yourImage.png"><span><</span>/div>

<span><</span>/div></p>
</pre>

**Firstly, Create a Div with id of "double-sided-slider" wherever you want and inside it:

----> You should use 3 different classes when you create your slider: <br/>
1) class="sliderHeading" will dedicate the heading of your content. <br/>
2) class="sliderContent" will dedicate your content. <br/>
3) class="sliderImage" will dedicate the image of your slide. You should give "data-image" as an attribute in this div for stating src of your image. 

<h3>Initialize the slider in your script</h3>
<h1>Script Code:<h1>
<pre>
  <p>
  create(A); 
  // write how many slides you will create in your slider, instead of A 
  </p>
</pre>
  
# Example
<pre>
<p>
  <span><</span>html>
  
  <span><</span>head>
    <span><</span>link rel="stylesheet" href="https://res.cloudinary.com/dd2ownqt9/raw/upload/v1557702188/style.min_molnj7.css"<span>></span>
  <span><</span>/head>
  
  
  
  <span><</span>body>
  
    <span><</span>div id="double-sided-slider">
    
      <span><</span>div class="sliderHeading"> Heading 1 <span><</span>/div>
      <span><</span>div class="sliderContent"> Content 1 <span><</span>/div>
      <span><</span>div class="sliderImage" data-image="yourImage.png"><span><</span>/div>
      
      <span><</span>div class="sliderHeading"> Heading 2 <span><</span>/div>
      <span><</span>div class="sliderContent"> Content 2 <span><</span>/div>
      <span><</span>div class="sliderImage" data-image="yourImage2.png"><span><</span>/div>
      
    <span><</span>/div>  
   
   
   
   
  <span><</span>script src="https://res.cloudinary.com/dd2ownqt9/raw/upload/v1557702102/double-sided-slider.min_acfmjk.js"<span>></span></script>
  <span><</span>script>
  
    create(2); 
    
  <span><</span>/script>
  <span><</span>/body>
   
  <span><</span>/html> 
</p> 
</pre>
