<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-wptheme"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Reenie+Beanie&display=swap"
      rel="stylesheet">
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and %PUBLIC_URL% in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (%PUBLIC_URL%) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
    <title>Fleur Delaville, artist & box maker</title>

    <meta property="og:site_name" content="Fleur Delaville" />
    <meta property="og:locale" content="en_UK" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="%PUBLIC_URL%/react-src/src/assets/images/banner.jpg"
    />
    <meta
      property="og:image:width"
      content="1200"
    />
    <meta
      property="og:image:height"
      content="630"
    />
    <meta
      property="og:image:alt"
      content="Written Fleur Delaville, and a cropped view of a building top on the blue sky"
    />

          
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://fleurdelaville.net/"/>
    <meta name="twitter:site" content="@FlosWebdesign" />
    <meta
      name="twitter:image"
      content="https://fleurdelaville.net/assets/images/banner.jpg"
    />
            <meta
      property="twitter:image:alt"
      content="Written Fleur Delaville, and a cropped view of a building top on the blue sky"
    />
    <meta name="twitter:creator" content="@FlosWebdesign" />

    <meta name="title" content="Fleur Delaville, artist & box maker" data-react-helmet="true"/>
    <meta name="description" content="Fleur Delaville is a French artist, based in Hamburg, Germany. She is working with analogue and digital photography, and design machines inspired by pre-cinematic toys." data-react-helmet="true"/>

    <meta property="og:title" content="Fleur Delaville, artist & box maker" data-react-helmet="true" />
    <meta property="og:description" content="Fleur Delaville is a French artist, based in Hamburg, Germany. She is working with analogue and digital photography, and design machines inspired by pre-cinematic toys." data-react-helmet="true" />
    <meta
      property="og:url"
      content="https://fleurdelaville.net/"
      data-react-helmet="true"
    />
            

    <meta name="twitter:title" content="Fleur Delaville, artist & box maker" data-react-helmet="true" />
    <meta
      name="twitter:description"
      content="Fleur Delaville is a French artist, based in Hamburg, Germany. She is working with analogue and digital photography, and design machines inspired by pre-cinematic toys."
      data-react-helmet="true"
    />
  </head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    </body>
</html>
