import java.util.*;

class Spec{
    public static int fact( int n)
     { int f=1;
        for(int i=n;i>=1;i--)
          { f*=i;}
        return f;  
     }
    /**
     * @param arg
     */
    public static void main( String arg[])
       { Scanner sc=new Scanner(System.in);
        
        int n=sc.nextInt();
        int p=n;
        int s=0,r;
        while(p>0)
          {  r=p%10;
             s+=fact(r);   
             p/=10;
          }
          
          if(s==n)
           { System.out.println("This is a Special Number");
            }
          else
            { System.out.println("This is not a Special Number");
            }  
        sc.close();
       }
}