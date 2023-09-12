import java.util.*;
class Arm{
    public static void main( String arg[])
       { Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int p=n;
        int i=0;
        int s=0,r;
        int t=n;
        while(t>0)
          { t/=10;
            i++;}
            System.out.println(i); 
        while(p>0)
          {  r=p%10;
             int q=(int)Math.pow(r,i);
             s+=q;
             p/=10;       
             System.out.println(s);
             System.out.println("\t");      
          }
          
          if(s==n)
           { System.out.println("This is a Armstrong Number");
            }
          else
            { System.out.println("This is not a Armstrong Number");
            }  
        sc.close();
       }
}