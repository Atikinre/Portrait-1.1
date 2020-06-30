
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
[1, -0.51570],
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
[-0.32218, 1.0000],
[-0.38075, 0.95516],
[-0.45607, 0.91928],
[-0.4728, 0.88341],
[-0.52301, 0.82960],
[-0.54812, 0.78475],
[-0.57322, 0.73094],
[-0.59833, 0.68610],
[-0.64017, 0.60538],
[-0.68201, 0.51570],
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
[-0.56485, -0.54260],
[-0.50628, -0.59641],
[-0.45607, -0.68610],
[-0.42259, -0.79372],
[-0.4477, -0.85650],
[-0.48954, -0.91031],
[-0.50628, -0.96413],
[-0.43933, -0.99103],
[-0.38912, -0.99103],
[-0.30544, -1.0000],
[-0.17992, -1.0359],
[-0.14644, -1.0359],
[0.012552, -1.0359],
[0.12134, -1.0179],
[0.19665, -0.94619],
[0.31381, -0.91031],
[0.40586, -0.92238],
[0.4477, -0.90341],
[0.56444, -0.86547],
[0.6318, -0.77578],
[0, 0],
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
[0.46444, -0.87444],
[0, 0],
[0.69874, 0.38117],
[0.6569, 0.35426],
[0.61506, 0.39013],
[0.49791, 0.39013],
[0.37238, 0.33632],
[0.2636, 0.28251],
[0.21339, 0.24664],
[0.19665, 0.19283],
[0.12134, 0.17489],
[0.037657, 0.14798],
[-0.037657, 0.16592],
[-0.18828, 0.13004],
[-0.29707, 0.085202],
[-0.39749, 0.031390],
[-0.40586, -0.040359],
[-0.4477, -0.058296],
[-0.4728, -0.058296],
[-0.4728, -0.085202],
[-0.45607, -0.10314],
[-0.40586, -0.10314],
[-0.37238, -0.13004],
[-0.33891, -0.17489],
[-0.2887, -0.21076],
[-0.23849, -0.22870],
[-0.17992, -0.21076],
[-0.096234, -0.17489],
[-0.0041841, -0.14798],
[0.037657, -0.094170],
[0.07113, 0.0044843],
[0.054393, 0.076233],
[0.046025, 0.11211],
[0.12134, 0.14798],
[0.16318, 0.14798],
[0.19665, 0.15695],
[0.23013, 0.11211],
[0.27197, 0.049327],
[0.34728, 0.022422],
[0.43096, 0.013453],
[0.50628, 0.058296],
[0.59833, 0.094170],
[0.67364, 0.13004],
[0.69038, 0.20179],
[0.68201, 0.28251],
[0.70711, 0.33632],
[0.69874, 0.36323],
[0, 0],
[0.020921, 0.040359],
[-0.17155, -0.0044843],
[-0.22176, -0.040359],
[-0.2636, -0.067265],
[-0.27197, -0.094170],
[-0.19665, -0.094170],
[-0.16318, -0.085202],
[-0.1046, -0.049327],
[-0.020921, -0.022422],
[0.020921, 0.0044843],
[0.020921, 0.040359],
[0, 0],
[0.28033, 0.13901],
[0.31381, 0.17489],
[0.38075, 0.21076],
[0.4477, 0.21973],
[0.49791, 0.21973],
[0.54812, 0.23767],
[0.50628, 0.20179],
[0.43096, 0.16592],
[0.37238, 0.13901],
[0.33054, 0.12108],
[0.28033, 0.11211],
[0.25523, 0.11211],
[0.28033, 0.14798],
[0, 0],
[0.054393, -0.53363],
[0.13808, -0.42601],
[0.18828, -0.36323],
[0.24686, -0.35426],
[0.33054, -0.32735],
[0.38075, -0.29148],
[0.43933, -0.29148],
[0.53138, -0.29148],
[0.59833, -0.29148],
[0.6318, -0.30942],
[0.59833, -0.33632],
[0.55649, -0.37220],
[0.51464, -0.40807],
[0.4477, -0.46188],
[0.38075, -0.51570],
[0.30544, -0.53363],
[0.23013, -0.53363],
[0.17992, -0.52466],
[0.13808, -0.51570],
[0.062762, -0.55157],
[0.046025, -0.53363],
[0, 0],
[-0.096234, 0.24664],
[-0.020921, 0.17489],
[-0.22176, 0.10314],
[-0.38912, 0.013453],
[-0.43096, 0.022422],
[-0.42259, 0.067265],
[-0.37238, 0.11211],
[-0.24686, 0.16592],
[-0.12134, 0.22870],
[-0.1046, 0.23767],
[0, 0],
[0.19665, 0.30942],
[0.20502, 0.35426],
[0.39749, 0.43498],
[0.49791, 0.45291],
[0.57322, 0.43498],
[0.59833, 0.42601],
[0.57322, 0.39910],
[0.50628, 0.37220],
[0.41423, 0.33632],
[0.2887, 0.30045],
[0.21339, 0.25561],
[0.19665, 0.30045],
[0.19665, 0.32735],
[0, 0],
[0.079498, -0.30045],
[0.14644, -0.28251],
[0.17992, -0.28251],
[0.23013, -0.27354],
[0.28033, -0.26457],
[0.33054, -0.22870],
[0.37238, -0.20179],
[0.41423, -0.16592],
[0.41423, -0.085202],
[0.38075, -0.049327],
[0.2887, -0.0044843],
[0.24686, 0.022422],
[0.20502, 0.076233],
[0.17992, 0.11211],
[0.14644, 0.13004],
[0.12134, 0.11211],
[0.096234, 0.094170],
[0.096234, 0.031390],
[0.096234, -0.013453],
[0.096234, -0.067265],
[0.096234, -0.12108],
[0.07113, -0.17489],
[0.046025, -0.20179],
[0.046025, -0.25561],
[0.062762, -0.28251],
[0.079498, -0.30045],
[0,0],
[0.079498, -0.52466],
[0.17992, -0.46188],
[0.23849, -0.44395],
[0.29707, -0.42601],
[0.34728, -0.39910],
[0.38912, -0.38117],
[0.43933, -0.36323],
[0.48954, -0.33632],
[0.54812, -0.32735],
[0.59833, -0.31839],
];
  pixctx.beginPath();
  for (var i = 1; i < over.length; ++i) {
    if(over[i][0] == 0 && over[i][1] == 0){
      i++;
      pixctx.moveTo(150 *  (1.5 - over[i][0]), 150 *  (1.5 -  over[i][1]))
    }
    else
      pixctx.lineTo(150 *  (1.5 - over[i][0]), 150 *  (1.5 -  over[i][1]));
    
  }
  var face = [
    
  ];
  pixctx.closePath();
  pixctx.stroke();


