# 525icons v4.0
525icons is a very comprehensive and versatile web icon collection, designed for websites and apps, and it is completely free for commercial use. 

If you download the font, you will get the web files you see here as well, where you may further investigate the css-codes in use. 
In the fonts folder, you also will find the font in otf format, which you may install for use in PC or Mac applications.

##Instructions (How-to)
If you are familiar with the use of the Font Awesome web font, the 525icons web font css code has some differences.

The icons are placed by adding the 'ico-' class prefix to the icons name (Font Awesome uses the 'fa-' prefix).
Transitions, sizes and effects use the 'ux-' prefix (While the Font Awesome uses the 'fa-' prefix all over). 

If you want to place the font files on your own server, make sure the entire fonts directory is copied into your project.
You will need the files:

fonts/525icons.css
fonts/525icons.eot
fonts/525icons.svg
fonts/525icons.ttf
fonts/525icons.woff
fonts/525icons.woff2

You do not need the file 525icons.otf, unless you want to install it on your OS.
The css file must be in the same directory as the fonts. If not, you have the make changes in the code.

In the <head> of your html, reference the location to your 525icons.css and fonts. 

< link rel="stylesheet" type='text/css' href="path/to/fonts/525icons.css">

********************************************************************************************************
The 525icons css and font files are available at 
jsdelivr.com The free super-fast CDN for developers and webmasters.

You do not need to add the font files on your own server. It's enough to just link the css file with the link below:

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/525icons/4.0/525icons.min.css">

********************************************************************************************************

<strong>How to place the icons in your html-file:</strong><br>
Like Font Awesome, 525icons is designed to be used with the inline element: <code>&lt;i&gt;</code> 
You can place the icons using the CSS Prefix 'ico-' and the icon's name, like this:
<i class="ico-yin-yang"></i>

And you may add additional classes, like this example:

<i class="ico-yin-yang ux-lg" style="color: #000;"></i>

The 525icons icon set is optimized for (16 × N)px sizes. You will get crisp results by setting your font-size to 16px, 32px, 48px (= 3 × 16px), etc.

The .ux-Nx classes are optimized for these sizes, like this:

.ux-1-5x {
	font-size: 24px;
}
.ux-2x {
	font-size: 32px;
}

.ux-3x {
	font-size: 48px;
}
.ux-4x {
	font-size: 64px;
}
.ux-5x {
	font-size: 80px;
}
.ux-6x {
	font-size: 96px;
}
.ux-7x {
	font-size: 112px;
}

##Licence notice

All brand icons are trademarks of their respective owners.
The use of these trademarks does not indicate endorsement of the trademark holder by 525icons, nor vice versa.

The license does not apply to copyrighted logos and brand icons.
