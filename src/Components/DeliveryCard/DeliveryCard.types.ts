import { Order } from '../../Apollo/generated/graphql';

export interface DeliveryCardProps {
  order: Order;
  fullWidth?: boolean;
}
