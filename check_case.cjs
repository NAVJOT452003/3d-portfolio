const fs = require('fs');
const path = require('path');
const srcDir = path.join(process.cwd(), 'src');

function readDirRecursive(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(readDirRecursive(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = readDirRecursive(srcDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
let mismatch = false;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /import\s+.*?\s+from\s+['"](.+?)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
            const dir = path.dirname(file);
            const resolved = path.resolve(dir, importPath);
            // check extensions
            const exts = ['', '.ts', '.tsx', '.js', '.jsx', '.css', '/index.ts', '/index.tsx'];
            let foundPath = null;
            for (const ext of exts) {
                if (fs.existsSync(resolved + ext)) {
                    foundPath = resolved + ext;
                    break;
                }
            }
            if (foundPath) {
                const dirName = path.dirname(foundPath);
                const actualFiles = fs.readdirSync(dirName);
                const baseName = path.basename(foundPath);
                if (!actualFiles.includes(baseName)) {
                    console.log('Case mismatch in', file, '-> imported', importPath, 'but actual is', baseName);
                    mismatch = true;
                }
            } else {
                console.log('File not found in', file, '-> imported', importPath);
                mismatch = true;
            }
        }
    }
});
if (!mismatch) console.log('No case mismatches found.');
