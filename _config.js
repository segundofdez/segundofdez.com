import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssCustomMedia from "npm:postcss-custom-media@9.1.2";
import multilanguage from "lume/plugins/multilanguage.ts";
import favicon from "lume/plugins/favicon.ts";
import esbuild from "lume/plugins/esbuild.ts";


const site = lume({
    src: "./src",
    location: new URL("https://www.segundofdez.com/"),
    server: {
        open: true,
    },
});

site
    .use(postcss({
        plugins: [
            postcssCustomMedia(),
        ],
        keepDefaultPlugins: true,
    }))
    .use(multilanguage({
        languages: ["gl", "es", "en"], // Available languages
        defaultLanguage: "gl", // Optional: A prefix-free language
    }))
    .use(favicon({
        input: "/favicon.svg",
    }))
    .use(esbuild({
        // Your esbuild options here
    })
);

site.use(basePath());

export default site;
