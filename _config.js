import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssCustomMedia from "npm:postcss-custom-media@9.1.2";
import multilanguage from "lume/plugins/multilanguage.ts";
import favicon from "lume/plugins/favicon.ts";
import esbuild from "lume/plugins/esbuild.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
    src: "./src",
    location: new URL("https://www.segundofdez.com/"),
    server: {
        open: true,
    },
});

site
    .use(transformImages({
        // cache: false,
    }))
    .copy("static", ".")
    .use(postcss({
        plugins: [
            postcssCustomMedia(),
        ],
        keepDefaultPlugins: true,
    }))
    site.use(basePath())
    .use(multilanguage({
        languages: ["gl", "es", "en"],
        defaultLanguage: "gl",
    }))
    .use(favicon({
        input: "/favicon.svg",
    }))
    .use(esbuild({})
);


export default site;
