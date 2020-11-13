#!/usr/bin/env node
const srcDir = `src`;
const destDir = `lib`;

require('fs-extra').copy(srcDir, destDir,  (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Copy components success!');
  }
});