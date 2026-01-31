"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { makeStore } from "@/app/redux/store";
import { setActivePlan } from "@/app/redux/slices/activePlan";
import { openPopUp } from "@/app/redux/slices/loginSlice";
import { createCheckoutSession } from "../../firebase/stripePayments";
import LoadingSpinner from "@/app/(main-app)/components/LoadingComponents/LoadingSpinner";

export default function PlanSelection() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.AuthState.user);
  const [loading, isLoading] = useState(false);
  type StoreState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
  const active = useSelector(
    (state: StoreState) => state.ActivePlan.ActivePlan as "yearly" | "monthly"
  );

  const PRICE_IDS = {
    yearly: "price_1Sv4RpI5ygUw90U3Z1N3JLRv",
    monthly: "price_1Sv4Q7I5ygUw90U3DyK4cikg",
  };


console.log(user)



  const handlePayment = async () => {
    if (!user) {
      dispatch(openPopUp()); 
      return;
    }

    isLoading(true);
    try {
      const selectedPriceId =
        active === "yearly" ? PRICE_IDS.yearly : PRICE_IDS.monthly;
      await createCheckoutSession(user.uid, selectedPriceId);
    } catch (error) {
      console.error("Payment initiation failed", error);
      isLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={() => dispatch(setActivePlan("yearly"))}
        className={
          active === "yearly"
            ? `plan__card
        flex gap-6 p-6 bg-[#f1f6f4] border border-[#2be080]
      border-4 rounded-sm cursor-pointer max-w-[680px] mx-auto`
            : `plan__card
        flex gap-6 p-6 bg-[#f1f6f4] border border-[#bac8ce]
      border-4 rounded-sm cursor-pointer max-w-[680px] mx-auto`
        }
      >
        <div
          className="card__circle relative w-6 h-6 rounded-full border-2
        flex items-center justify-center"
        >
          {active === "yearly" ? (
            <div
              className="card__dot absolute w-[6px] h-[6px] bg-black
          rounded-full"
            ></div>
          ) : null}
        </div>
        <div className="card__content">
          <div className="card__title font-semibold text-lg text-[#032b41] mb-2">
            Premium Plus Yearly
          </div>
          <div className="card__price text-2xl font-bold text-[#032b41] mb-2">
            $99.99/year
          </div>
          <div className="card__description text-[#6b757b] text-sm">
            7-day free trial included
          </div>
        </div>
      </div>
      <div
        className="plan__separator text-sm text-[#6b757b] flex gap-2 items-center
      max-w-[240px] mx-auto my-6
      before:grow-1 before:h-[1px] before:bg-[#bac8ce]
      after:grow-1 after:h-[1px] after:bg-[#bac8ce]"
      >
        <div className="separator__text">or</div>
      </div>
      <div
        onClick={() => dispatch(setActivePlan("monthly"))}
        className={
          active === "monthly"
            ? `plan__card
        flex gap-6 p-6 bg-[#f1f6f4] border border-[#2be080]
      border-4 rounded-sm cursor-pointer max-w-[680px] mx-auto`
            : `plan__card
        flex gap-6 p-6 bg-[#f1f6f4] border border-[#bac8ce]
      border-4 rounded-sm cursor-pointer max-w-[680px] mx-auto`
        }
      >
        <div
          className="card__circle relative w-6 h-6 rounded-full border-2
        flex items-center justify-center"
        >
          {active === "monthly" ? (
            <div
              className="card__dot absolute w-[6px] h-[6px] bg-black
          rounded-full"
            ></div>
          ) : null}
        </div>
        <div className="card__content">
          <div className="card__title font-semibold text-lg text-[#032b41] mb-2">
            Premium Monthly
          </div>
          <div className="card__price text-2xl font-bold text-[#032b41] mb-2">
            $9.99/month
          </div>
          <div className="card__description text-[#6b757b] text-sm">
            No trial included
          </div>
        </div>
      </div>
      <div
        className="cta bg-[#fff] sticky bottom-0 py-8 flex flex-col 
      items-center gap-4"
      >
        <span className="btn__wrapper">
          <button
            className="btn justify-center"
            style={{ width: "300px" }}
            onClick={handlePayment}
          >
            {loading ? (
              <span className="animate-spin"><LoadingSpinner /></span>
            ) : active === "yearly" ? (
              <span>Start your free 7-day trial</span>
            ) : (
              <span>Start your first month</span>
            )}
          </button>
        </span>

        <div className="disclaimer text-xs text-[#6b757b] text-center">
          {active === "yearly"
            ? "Cancel your trial at any time before it ends, and you won't be charged."
            : "30-day money back guarantee, no questions asked."}
        </div>
      </div>
    </>
  );
}
