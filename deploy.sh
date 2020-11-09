rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:huyiling1111/gulu-ui-website.git &&
git push -f -u origin master &&
cd .. &&
ehco https://huyiling1111.github.io/gulu-ui-website/index.html
