import java.io.*;
class Excep {
    public static void main(String args[]) {
      int div;
        try {
        // Code that can raise exception
         div = 509 / 0; 
         System.out.println("Value of div:"+div);
        System.out.println("Error is generated!!!");
      } catch (ArithmeticException e) {
        System.out.println(e);
      }
      System.out.println("End of code");
    }
  }
  