export const concatData = (data: Array<string>) => {
    if(data){
        return data.join(', ');
    } else {
        return 'No info'
    }
  }

