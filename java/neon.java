import java.util.*;
class Neon{
    public static void main( String arg[])
       {Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int sq= n*n;
        int p=sq;
        int s=0,rev;
        while(p>0)
          {  rev=p%10;
             s=s+rev;
             p/=10;             
          }
          if(s==n)
           { System.out.println("This is a Neon Number");
            }
          else
            { System.out.println("This is not a Neon Number");
            }  
          sc.close();
       }
}