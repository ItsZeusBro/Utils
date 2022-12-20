class Path{
    resolve(projectHome, pathFromProjectHome){
        return path.resolve('./').split(projectHome)[0]+projectHome+'/'+pathFromProjectHome
    }
}
