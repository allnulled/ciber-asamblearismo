const fs = require("fs");
const javadoc = require(__dirname + "/javadoc.json");
const comments = javadoc.success;
console.log("[reference/build] Producing file JAVADOC.md.")
let md = "";
for(let index=0; index<comments.length; index++) {
  const file_comments = comments[index];
  if(file_comments.length) {
    md += "\n\n------";
    md += "\n\n**File:** " + file_comments[0].file;
  }
  for(let index2=0; index2<file_comments.length; index2++) {
    const comment = file_comments[index2];
    const keys = Object.keys(comment);
    md += "\n\n------\n";
    for(let index3=0; index3<keys.length; index3++) {
      const key = keys[index3];
      const value = comment[key];
      const key_string = "\n- **`" + key + "`:**";
      // md += key_string;
      if(Array.isArray(value)) {
        for(let index4=0; index4<value.length; index4++) {
          const subvalue = value[index4];
          md += key_string + subvalue;
        }
      }
    }
  }
}
fs.writeFileSync(__dirname + "/JAVADOC.md", md, "utf8");
console.log("[reference/build] File JAVADOC.md successfully produced.")