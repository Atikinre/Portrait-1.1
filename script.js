
  var myportrait = document.getElementById("canvas");
  var pixctx = myportrait.getContext("2d");
  var over = [
    [0.46444, -0.87444],
    [0.6318, -0.77578],
    [0.69874, -0.69507],
    [0.74059, -0.59641],
    [0.79079, -0.50673],
    [0.79916, -0.43498],
    [0.83264, -0.49776],
    [0.92469, -0.55157],
    [1, -0.5157],
    [0.95816, -0.43498],
    [0.90795, -0.41704],
    [0.90795, -0.32735],
    [0.92469, -0.24664],
    [0.94142, -0.16592],
    [0.96653, -0.013453],
    [0.95816, 0.13901],
    [0.91632, 0.29148],
    [0.82427, 0.48879],
    [0.74895, 0.61435],
    [0.64854, 0.72197],
    [0.59833, 0.80269],
    [0.54812, 0.87444],
    [0.48954, 0.92825],
    [0.42259, 0.95516],
    [0.2887, 0.98206],
    [0.19665, 1.0269],
    [0.054393, 1.0628],
    [-0.029289, 1.0628],
    [-0.12134, 1.0628],
    [-0.23849, 1.0269],
    [-0.32218, 1.0],
    [-0.38075, 0.95516],
    [-0.45607, 0.91928],
    [-0.4728, 0.88341],
    [-0.52301, 0.8296],
    [-0.54812, 0.78475],
    [-0.57322, 0.73094],
    [-0.59833, 0.6861],
    [-0.64017, 0.60538],
    [-0.68201, 0.5157],
    [-0.69874, 0.42601],
    [-0.70711, 0.34529],
    [-0.74059, 0.26457],
    [-0.75732, 0.19283],
    [-0.76569, 0.076233],
    [-0.77406, -0.040359],
    [-0.77406, -0.11211],
    [-0.72385, -0.21076],
    [-0.67364, -0.31839],
    [-0.64854, -0.44395],
    [-0.62343, -0.49776],
    [-0.56485, -0.5426],
    [-0.50628, -0.59641],
    [-0.45607, -0.6861],
    [-0.42259, -0.79372],
    [-0.4477, -0.8565],
    [-0.48954, -0.91031],
    [-0.50628, -0.96413],
    [-0.43933, -0.99103],
    [-0.38912, -0.99103],
    [-0.30544, -1.0],
    [-0.17992, -1.0359],
    [-0.14644, -1.0359],
    [0.012552, -1.0359],
    [0.12134, -1.0179],
    [0.19665, -0.94619],
    [0.31381, -0.91031],
    [0.40586, -0.89238],
    [0.4477, -0.88341],
    [0.46444, -0.86547],
    [0.46444, -0.87444],
[0.71548, -0.63229],
[0.76569, -0.51570],
[0.80753, -0.39013],
[0.8159, -0.22870],
[0.82427, -0.094170],
[0.88285, -0.049327],
[0.89121, 0.058296],
[0.84937, 0.20179],
[0.79079, 0.23767],
[0.74895, 0.24664],
[0.69874, 0.34529],
[0.6569, 0.47085],
[0.56485, 0.63229],
[0.43933, 0.77578],
[0.33891, 0.86547],
[0.21339, 0.90135],
[0.14644, 0.88341],
[-0.012552, 0.82960],
[-0.17155, 0.76682],
[-0.2636, 0.68610],
[-0.33891, 0.63229],
[-0.39749, 0.50673],
[-0.38912, 0.36323],
[-0.39749, 0.21973],
[-0.43096, 0.11211],
[-0.45607, 0.031390],
[-0.46444, -0.031390],
[-0.4728, -0.10314],
[-0.45607, -0.17489],
[-0.43933, -0.22870],
[-0.42259, -0.29148],
[-0.40586, -0.35426],
[-0.37238, -0.41704],
[-0.30544, -0.49776],
[-0.23013, -0.59641],
[-0.17992, -0.67713],
[-0.13808, -0.71300],
[-0.046025, -0.77578],
[0.079498, -0.82960],
[0.16318, -0.87444],
[0.2887, -0.91928],
[0.38912, -0.91928],
[0.46444, -0.88341],
[0.46444, -0.86547],
    
  ];
  pixctx.beginPath();
  for (var i = 1; i < over.length; ++i) {
    pixctx.lineTo(150 *  (2 - over[i][0]), 150 *  (1.5 -  over[i][1]));
    console.log(100 * over[i][0]);
  }
  var face = [
    
  ];
  pixctx.closePath();
  pixctx.stroke();


