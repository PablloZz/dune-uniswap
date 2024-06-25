const Config = {
  ENV: { DUNE_API_KEY: process.env.DUNE_API_KEY as string },
} as const;

export { Config };
