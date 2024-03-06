# Reproduction repo

Reproduce issue:

`yarn dev` -> result shows `my_key` instead of text

Revert to working version 14.0.4:

`git checkout ac07cf0d3e`
`yarn`
`yarn dev` -> result shows text as expected
