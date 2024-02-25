import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssCustomMedia from "npm:postcss-custom-media@9.1.2";


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
    })
);

site.use(basePath());
export default site;
