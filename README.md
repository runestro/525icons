
# [525icons v6.0](http://525icons.com)
## The stylish pictographic web font!

525icons is a very comprehensive and versatile web icon collection, designed for websites and apps, and it is completely free for commercial use. 


## Instructions (How-to)
**The 525icons css and font files are available at 
jsdelivr.com The free super-fast CDN for developers and webmasters.**

You do not need to add the font files on your own server. It's enough to just link the css file like this:

<code>&lt;link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/runestro/525icons@6.0/fonts/525icons.min.css"&gt;</code>

If you want to place the font files on your own server, make sure the entire fonts directory is copied into your project.
You will need the files:

<ul>
<li>fonts/525icons.css</li>
<li>fonts/525icons.eot</li>
<li>fonts/525icons.svg</li>
<li>fonts/525icons.ttf</li>
<li>fonts/525icons.woff</li>
<li>fonts/525icons.woff2</li>
</ul>


The css file must be in the same directory as the fonts. If not, you have to make changes in the code.

In the <code>&lt;head&gt;</code> of your html, reference the location to your 525icons.css and fonts. 

<code>&lt;link rel="stylesheet" type='text/css' href="path/to/fonts/525icons.css"&gt;</code>

You do not need the file 525icons.otf, unless you want to install it on your OS.

**How to place the icons in your html-file:**
If you are familiar with the use of the Font Awesome web font, the 525icons css code has some differences.
Like Font Awesome, 525icons is designed to be used with the inline element: <code>&lt;i&gt;</code>. 
The icons are placed by adding the CSS prefix <code>'ux'</code> plus the <code>'ico-'</code> class prefix in front of the icons name,
like in this example:

<code>&lt;i class="ux ico-yin-yang"&gt;&lt;/i&gt;</code>

And you may add additional classes, like here:

<code>&lt;i class="ux ico-yin-yang ux-2x black bg-white img-circle"&gt;&lt;/i&gt;</code>


You may further investigate all the different css-codes in use, inside the file: <a href="demo.html"><u>demo.html</u>
</a> and  <a href="fonts/525icons.css"><u>525icons.css</u></a>.

To use the 525icons OTF font in desktop applications, you have to install the font on your system. 
When installing the font or viewing it, the operating system may not show all the glyphs in the font. In most cases only the basic Latin characters are shown.

The 525icons icon set is optimized for (16 × N)px sizes. You will get crisp results by setting your font-size to 16px, 32px, 48px (= 3 × 16px), etc.

The .ux-Nx classes are optimized for these sizes, like this:

<code>.ux-2x {font-size: 32px;}</code>


## License
- The 525icons font is licensed under the SIL OFL 1.1:
  - https://scripts.sil.org/OFL
- CSS files are licensed under the MIT License:
  - https://opensource.org/licenses/mit-license.html
  
All brand icons are trademarks of their respective owners.
The use of these trademarks does not indicate endorsement of the trademark holder by 525icons, nor vice versa.

The license does not apply to copyrighted logos and brand icons.


## Author
- Rune Strømsted, Norway

- Email: runestro@gmail.com

- Twitter: https://twitter.com/@runestro

- GitHub: https://github.com/runestro
