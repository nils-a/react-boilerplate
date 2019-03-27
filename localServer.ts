import * as webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import * as config from "./webpack.config";
const opn = require('open');

const output = (config as webpack.Configuration).output as webpack.Output; // why?!
const plugins = (config as webpack.Configuration).plugins;
plugins.push(new webpack.HotModuleReplacementPlugin());
let serverConfig = {...config,
  mode: "development",
  output:{
    ...output,
    pathinfo:true,
  },
  plugins: plugins
} as webpack.Configuration;

const compiler = webpack(serverConfig);

const SERVER_PORT = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT as string, 10) : 8080;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const server = new WebpackDevServer(compiler, {
  publicPath: "/dist/",
  contentBase: "./",
  hot: true,
  historyApiFallback: true,
  //progress: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: true,
    modules: true,
  },
});

server.listen(SERVER_PORT, SERVER_HOSTNAME, (err: Error) => {
  if (err) {
    console.log(err);
    return;
  } 

  const url = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;
  console.log(`Server listening at ${url}`);
  opn(url+"/");
});
