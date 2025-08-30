const name ="rishav";
const age =10;
const balance = 500;

const account=230;

function updatebalance(){
    balance+=20;
}
// PS C:\Users\acer\Desktop\PROJECTS\RECE> git log --oneline
// ab544ba (HEAD -> master) fourth commit
// 2134507 third commit 
// d35a09a thrid commit
// eab5b5c second commit
// 4c9d665 my first commit
// PS C:\Users\acer\Desktop\PROJECTS\RECE> git reset --hard 2134507
// HEAD is now at 2134507 third commit


//branching
function print(){
    console.log("hello world");
}
print();


// PS C:\Users\acer\Desktop\PROJECTS\RECE> git branch
// * feature
//   master
// PS C:\Users\acer\Desktop\PROJECTS\RECE> git checkout master
// M       REACT/bundlers
// Switched to branch 'master'
// PS C:\Users\acer\Desktop\PROJECTS\RECE> git merge feature
// Updating 2134507..984fc36
// Fast-forward
//  GIT/git_02/one.js | 17 ++++++++++++++++-
//  1 file changed, 16 insertions(+), 1 deletion(-)
// PS C:\Users\acer\Desktop\PROJECTS\RECE> git branch -D feature
// Deleted branch feature (was 984fc36).
// PS C:\Users\acer\Desktop\PROJECTS\RECE>