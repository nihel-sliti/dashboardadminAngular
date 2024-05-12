export interface Payments{
    id: number;
  code: string;
  paymentMode: string;
  amount: number;
  description?: string; // Marqué comme facultatif car il peut être null
  date?: string; // Date peut être représentée sous forme de chaîne si utilisée directement dans l'interface utilisateur
  status: string;
}
 