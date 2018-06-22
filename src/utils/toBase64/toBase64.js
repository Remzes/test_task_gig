const toDataURL = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    let reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
};

export const loadImage = (img) => (
  new Promise((resolve) => {
    toDataURL(img, (dataUrl) => {
      resolve(dataUrl);
    })
  })
);