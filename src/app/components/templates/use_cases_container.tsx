import { CommonButtonDark } from "../atoms/buttons/common_button";

const UseCaseContainer = () => {
  return (
    <div className="bg-white w-2/3 rounded-xl text-black px-24 py-12 mt-12 space-y-8">
      <h1 className="text-2xl font-semibold text-left">Use Cases</h1>
      <p className="text-sm font-medium text-left">
        Harness the capabilities of our comprehensive Back3nd suite to address
        intricate challenges and elevate the functionality of your fintech app
        with blockchain technology. Tailor your user onboarding experience,
        enhance user engagement, or seamlessly integrate new features, all
        powered by our advanced Back3nd solutions.
      </p>
      <CommonButtonDark label="Explore" />
    </div>
  );
};

export default UseCaseContainer;
