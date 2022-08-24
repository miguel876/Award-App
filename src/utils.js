export const stringAvatar = (name) => {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

export const setFullName = (name) => {
    if(name) return `${name.firstname} ${name.lastname}`
  
    return ''
  }