import type { ErrorBE } from '../utils/types';

interface ErrorInstance {
  response?: {
    data?: any;
  };
}

function handleServerErrors(err: ErrorInstance): ErrorBE {
  let errors: any = {};
  if (err.response?.data) {
    const { data } = err.response;
    if (typeof data !== 'string') {
      Object.keys(data).forEach((key) => {
        errors[key] = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
      });
    } else {
      errors = data;
    }
  }
  return errors;
}

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

//id ye göre sabit renk atama 
function getColorFromId(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 60%)`; // pastel renkler
}


const helpers = {
  handleServerErrors,
  capitalize,
  getColorFromId,
};




export default helpers;
