export interface Roca {
  id: string;
  nombre: string;
  grupo: "igneas" | "metamorficas" | "sedimentarias";
  dureza: number;
  tamGrano: "muy-grueso" | "grueso" | "medio" | "fino";
  clasificacion: string;
  tamCristales: number;
  tempFormacion: number;
  estructura: string;
  formaGranos: string;
  textura: "vitrea" | "afanitica" | "faneritica";
}
