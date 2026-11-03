import { company, whatsappNumber } from './company'

export interface Product {
  id: string
  title?: string
  model?: string
  description?: string
  /** Four points shown before the rest of the specification list. */
  highlights?: string[]
  features?: string[]
  /** Omit until a figure is confirmed. The page then shows "Price on request". */
  price?: string
  /** File name inside public/products/. */
  image: string
  imageAlt: string
}

export const products: Product[] = [
  {
    id: 'plan-measuring-wheel',
    title: 'Plan Measuring Wheel',
    model: 'PlanWheel SA2',
    description:
      'Our Plan Measuring Wheel measures plans fast and accurately. Roll the PlanWheel SA2 across a blueprint and the scaled measurement appears instantly. It is a stand-alone model and does not interface with your computer.',
    highlights: [
      '111 built-in and thousands of user-defined scale factors, imperial and metric',
      'Measures in inches, feet, yards, miles, centimeters, meters, and kilometers',
      'Calculates square and cubic dimensions for regular areas and volumes',
      'Stand-alone model. It does not interface with your computer',
    ],
    features: [
      'Calculate an auto-scale factor from reduced, enlarged, or odd-scale drawings',
      'Counter and adder buttons on the probe tip let you count items or add fixed lengths as you scale',
      'Create, store, and retrieve 2 user-defined scale factors',
      'Clear, audible tone indicates wheel movement',
      'Automatic shut-off assures long battery life',
      'Low battery indicator',
      'Plus / minus mode lets you roll backwards to deduct an over-rolled measurement',
      'Weight 0.40 lbs, dimensions 6 x 4 x 2 in',
    ],
    image: '/products/plan-measuring-wheel.jpg',
    imageAlt: 'PlanWheel SA2 plan measuring wheel',
  },
  {
    id: 'planwheel-xlu3',
    title: 'Plan Measuring Wheel',
    model: 'PlanWheel XLU3',
    description:
      'Measure plans the fast, accurate way with the Scalex PlanWheel XLU3. Roll it across a drawing and the scaled measurement appears instantly. Use it stand-alone, or connect it to your computer with the PlanWheel Interface Kit (sold separately).',
    highlights: [
      'Computer compatible. PlanWheel Interface Kit sold separately',
      '111 built-in and thousands of user-defined scale factors, imperial and metric',
      'Measures in inches, feet, yards, miles, centimeters, meters, and kilometers',
      'Calculates square and cubic dimensions for regular areas and volumes',
    ],
    features: [
      'Calculate an auto-scale factor from reduced, enlarged, or odd-scale drawings',
      'Counter and adder buttons on the probe tip let you count items or add fixed lengths as you scale',
      'Create, store, and retrieve 2 user-defined scale factors',
      'Clear, audible tone indicates wheel movement',
      'Automatic shut-off assures long battery life',
      'Low battery indicator',
      'Plus / minus mode lets you roll backwards to deduct an over-rolled measurement',
      'Weight 0.40 lbs, dimensions 6 x 4 x 2 in',
    ],
    image: '/products/planwheel-xlu3.jpg',
    imageAlt: 'Scalex PlanWheel XLU3 plan measuring wheel',
  },
  {
    id: 'scalex-mapwheel',
    title: 'Map Measuring Wheel',
    model: 'Scalex MapWheel',
    description:
      'Scalex MapWheel measures distances on maps, in straight lines or along curves. Set the scale, roll the wheel, and the distance appears instantly. It is portable and uses two AAA batteries (included).',
    highlights: [
      '19 built-in user scale factors, including all common map scales',
      'Measures in miles, kilometers, and nautical miles',
      'Counter and adder buttons on the probe tip let you count stops made or add fixed destination lengths as you measure',
      'One year limited warranty',
    ],
    features: [
      'Calculate an auto-scale factor from reduced, enlarged, or odd-scale maps',
      'Create, store, and retrieve user scale factors',
      'Clear, audible tone indicates wheel movement',
      'Easy-to-read liquid crystal display shows length, count, and scale factor simultaneously',
      'Automatic shut-off assures long battery life',
      'Low battery indicator',
      'Weight 0.40 lbs, dimensions 6 x 4 x 2 in',
    ],
    image: '/products/scalex-mapwheel.jpg',
    imageAlt: 'Scalex MapWheel map measuring wheel',
  },
]

export function productWhatsAppUrl(productName: string) {
  if (!whatsappNumber) return ''

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello ${company.name}, I would like to enquire about the ${productName}.`,
  )}`
}
