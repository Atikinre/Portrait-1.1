console.log('Lection Part2');
           var pixctx=mypixcanvas.getContext('2d');
           var  imgData = pixctx.getImageData(0,0, 600,400);
           var   RGBA =  imgData.data
           
           // some primitive functions (returning positive number inside and negative number outside)
           function box(x,y)          {return  1 - Math.max(Math.abs(x),Math.abs(y));  }
           function romb(x,y)          {return  1 - (Math.abs(x)+Math.abs(y));  }
           function roundedSquare(x,y) {return  1 - (x*x*x*x+y*y*y*y);          }
           function circle(x,y)        {return  1 - (x*x+y*y);                  }
        
          // some linear transformations of the arguments (incapsulated in vector v) of implicit functions
           
            function rotate(a, v)
                    {
                       let c_a=Math.cos(a);
                       let s_a=Math.sin(a);  
                           let x1 = v[0]*c_a    + v[1]*s_a
                           let y1 = v[0]*(-s_a) + v[1]*c_a
                             v[0]=x1; v[1]=y1;
                    }
            function scale(s1,s2, v)
                    {
                             v[0]/=s1; v[1]/=s2;
                    }

           function translate(dv, v)
                    {
                       v[0]-=dv[0]; v[1]-=dv[1];
                    }
            function shearx(t, v)
                    {
                        v[0] -= v[1]*t
                    }

            function sheary(t, v)
                    {
                        v[1] -= v[0]*t
                    }
            function transformByMatrix(M, v)
                    {
                      /*
                          | m0 m1 m2 |
                        M=| m3 m4 m5 |
                          | m6 m7 1  |
                      */
                      let [m0, m1, m2, m3, m4, m5, m6, m7, m8] = M;
                      let [x, y, w] = v;
                        let x1 = m0*x + m1*y + m2*w;
                        let y1 = m3*x + m4*y + m5*w;
                        let w1 = m6*x + m7*y + m8*w;
                             v[0]=x1; v[1]=y1;v[2]=w1;
                    }
            function canonic(v)  
                      {
                        let w= v[2];
                             v[0] /= w;
                             v[1] /= w;
                             v[2]=1;
                      }
            function projecty(h,v)
                    {
                      transformByMatrix(
                                   [1,   0  ,  0,
                                    0,   1  ,  0,
                                    0,  -1/h,  1 ],   v);     
                    }
            function projectx(h,v)
                    {
                      transformByMatrix(
                                   [1  ,  0 ,  0,
                                    0  ,  1 ,  0,
                                   -1/h,  0 ,  1 ],   v);     
                    }
           /* test_transformByMatrix()
               { 
                 let v= [1,10000000, 1] 
                 projecty(8, v);
                 console.log("Transformed v=",v);
                 canonic(v)  
                 console.log("Canonic  v=",v);
               }
           */
        
               function Fun(x,y) { let ey = Math.exp(y);
                                   let cx = Math.cos(x); 
                                    return ((1+ey)*cx-y*ey)*(x*x+y*y-25);}
        
              // alph  and  cos(alph) and  sin(alph) for rotation          
             let alph=  Math.PI/6; 
             let X = 0; //Screen X 
             let Y = 0; //Screen Y 
               for(let p=0; p<600*400*4; p+=4)  // for all pixels of canvas 
                { 
                  // computing math x and math y from screen X and screen Y
                    let x =  X/10;  // scaling to  math x
                    let y = -Y/10;  // scaling to  math y
                         x -= 30;      //  translating to math x0=0 
                         y += 20;      //  translating to math y0=0 
                           
                           // compute axes
                           const th=1/256;   
                           let axis_x =  Math.abs(y) < th ;
                           let axis_y =  Math.abs(x) < th ;
                             //combine them
                            let axes =  (axis_x+axis_y)*256;
                  
                           // compute grids
                           let grid_vertical   =  Math.abs(x%1) < th
                           let grid_horizontal =  Math.abs(y%1) < th
                             //combine them 
                             let grid = (grid_vertical+grid_horizontal)*64 
                             
                              // combine them all
                              let axes_and_grid = axes+grid
                           
                            // computing  picture functions 
                         let F= Fun(x,y); // F=-Infinity;
                                          // F = Math.max(F, A);
                  
                             //F *= 1024*1024;  // F - intensity of picture pixels (variant1)
                               F = 1024*1024/F;  // F - intensity of picture pixels (variant2)
                           
               
                               if(F>0) RGBA[p+0]=F;               // red if F>0
                                       RGBA[p+1]=axes_and_grid;   // green axes_and_grid
                               if(F<0) RGBA[p+2]=-F;              // blue if F<0
                                       RGBA[p+3]=255;             // opacity
                  
                  // computing new screen X and screen Y
                     X++; 
                      if(X==600)
                        { 
                         X=0; //Screen X 
                         Y++; //Screen Y 
                        }  
                }  
        
        
                pixctx.putImageData(imgData, 0, 0);     
