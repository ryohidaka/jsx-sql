import { renderHook, act } from "@testing-library/react";
import { useSampleHook } from ".";

describe("useSampleHook", () => {
  it("should update value", () => {
    const { result } = renderHook(() => useSampleHook("initial"));

    expect(result.current.value).toBe("initial");

    act(() => {
      result.current.updateValue("updated");
    });

    expect(result.current.value).toBe("updated");
  });
});
